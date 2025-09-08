//execute all tests in headless mode: npx playwright test
//execute all test in visible mode: npx playwright test --headed


import { test, expect } from '@playwright/test';

test.describe('Testing module-authentications on saucedemo.com', () => {

  async function loginPage(page) {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/i);
  }

  test('Login with valid credentials', async ({ page }) => {
    await loginPage(page);

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Login with invalid credentials', async ({ page }) => {
    await loginPage(page);

    await page.fill('#user-name', process.env.WRONGUSER || 'wrong_user');
    await page.fill('#password', process.env.WRONGPASS || 'wrong_pass');
    await page.click('#login-button');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
  });

});



