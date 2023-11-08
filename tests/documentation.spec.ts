import fs from 'fs';
import { test, expect } from '@playwright/test';

const testFilename = 'docs';
const testNames = fs.readFileSync('data/' + testFilename + '.txt', 'utf-8').split('\n').map(name => name.trim()).filter(Boolean);

test.describe(testFilename, () => {
  for (const testName of testNames) {
    test(testName, async ({ page }) => {
      await page.goto('https://playwright.dev/');
      await page.getByRole('link', { name: 'Get started' }).click();
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });
  }
});