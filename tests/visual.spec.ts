import { test, expect } from '@playwright/test';

test('homepage visual check', async ({ page }) => {
    await page.goto('/');
    // This will compare the current page with a stored snapshot.
    // The first time you run this, it will fail and create the snapshot.
    await expect(page).toHaveScreenshot({
        fullPage: true,
        mask: [page.locator("#cookie-banner")]
    });
});

test('japanese homepage visual check', async ({ page }) => {
    await page.goto('/ja');
    await expect(page).toHaveScreenshot({
        fullPage: true,
        mask: [page.locator("#cookie-banner")]
    });
});
