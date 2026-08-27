import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    exclude: ['node_modules', '.next', 'out', 'dist', 'playwright-report', 'test-results'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
