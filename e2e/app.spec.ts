import { test, expect } from '@playwright/test';
import { procedures } from '../src/data/procedures';

const baseUrl = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000';

test.describe('CSU Exams App E2E', () => {
  test('Homepage renders correctly', async ({ page }) => {
    await page.goto(baseUrl);
    await expect(page.locator('h1')).toHaveText(/CSU Exam Supervisor/);
  });

  test('All static endpoints return 200', async ({ request }) => {
    const endpoints = [
      '/',
      '/emergency',
      '/contacts',
      '/about',
      '/manifest.json',
      '/sw.js',
    ];

    for (const endpoint of endpoints) {
      const response = await request.get(`${baseUrl}${endpoint}`);
      expect(response.status()).toBe(200);
    }
  });

  test('All procedures return 200', async ({ request }) => {
    for (const proc of procedures) {
      const response = await request.get(`${baseUrl}/procedure/${proc.id}`);
      expect(response.status()).toBe(200);
    }
  });

  test('Navigation via click from homepage works for Before Exam', async ({ page }) => {
    await page.goto(baseUrl);
    await page.click('text="Before Exam"');
    await expect(page).toHaveURL(/.*\/procedure\/before-exam/);
    await expect(page.locator('h1')).toHaveText('Before Exam');
  });

  test('Navigation via click from homepage works for Student Sick', async ({ page }) => {
    await page.goto(baseUrl);
    await page.click('text="Student Sick"');
    await expect(page).toHaveURL(/.*\/procedure\/student-sick/);
    await expect(page.locator('h1')).toHaveText('Student Sick');
  });

  test('Navigation via click from homepage works for Student Late', async ({ page }) => {
    await page.goto(baseUrl);
    await page.click('text="Student Late"');
    await expect(page).toHaveURL(/.*\/procedure\/student-late/);
    await expect(page.locator('h1')).toHaveText('Student Late');
  });

  test('Search filtering and click navigation', async ({ page }) => {
    await page.goto(baseUrl);
    // Fill the search box
    await page.fill('input[type="search"]', 'fire');
    
    // Emergency button should disappear when searching
    await expect(page.locator('text="EMERGENCY"')).toBeHidden();

    // The Fire / Evacuation card should be visible
    const fireCard = page.locator('text="Fire / Evacuation"');
    await expect(fireCard).toBeVisible();

    // Click it and verify navigation
    await fireCard.click();
    await expect(page).toHaveURL(/.*\/procedure\/fire-evacuation/);
    await expect(page.locator('h1')).toHaveText('Fire / Evacuation');
  });

  test('All homepage cards navigate correctly without 404', async ({ page }) => {
    // Just a sample of cards to ensure no widespread 404
    const cardsToTest = [
      'Before Exam',
      'Student Sick',
      'Student Late',
      'Toilet Break',
      'Suspected Misconduct', // Title is Suspected Misconduct for suspected-cheating
      'Exam Question Problem',
      'Fire / Evacuation',
      'BYOD — Bring Your Own Device',
      'AEA / Accessibility',
      'Finish Exam'
    ];

    for (const cardTitle of cardsToTest) {
      await page.goto(baseUrl);
      // Wait for it to be visible before clicking
      await page.waitForSelector(`text="${cardTitle}"`);
      await page.click(`text="${cardTitle}"`);
      
      await expect(page.locator('h1')).toContainText(cardTitle);
    }
  });
});
