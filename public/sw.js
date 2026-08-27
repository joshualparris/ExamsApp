const CACHE_NAME = 'csu-exams-cache-v2';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['/']);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Don't cache chrome-extension:// or next.js hot reloading (dev)
  if (!event.request.url.startsWith(self.location.origin) && !event.request.url.startsWith('https://')) return;
  if (event.request.url.includes('/_next/webpack-hmr')) return;

  event.respondWith(
    // Network First, falling back to cache
    fetch(event.request)
      .then((networkResponse) => {
        // Cache the successful response
        if (networkResponse.ok) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fall back to cache on network failure (offline)
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // If neither network nor cache, could return a fallback offline page, but root '/' is cached
          // If asking for a page, maybe return '/'
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          return null; // Return null if not found
        });
      })
  );
});
