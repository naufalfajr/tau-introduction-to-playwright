import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*intro/);

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only('check Java Page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  
  await page.getByRole('button', { name: 'Node.js' }).hover();
  // await page.locator('.dropdown__menu').waitFor({ state: 'visible' });
  await expect(page.locator('.dropdown__menu')).toBeVisible();
  await page.getByRole('link', { name: 'Java', exact: true }).click();
  await expect(page).toHaveURL(/java/);

  await expect(page.getByText("Installing Playwright", { exact: true })).not.toBeVisible();

  const javaDesc = "Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.";
  await expect(page.getByText(javaDesc, { exact: true })).toBeVisible();
});

/** 
 * 1. open page playwright.dev
 * 2. click get started link
 * 3. mouse hover  the language dropdown
 * 4. click at java
 * 5. check the URL contains java
 * 6. check the text "Installing Playwright" in not displayed
 * 7. check the text is displayed "Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation."
 */
