import { test, expect } from '@playwright/test';

test.describe('Checkout Features', () => {

  test('CT-007 - Successfully complete purchase', async ({ page }) => {

    // Access application
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Validate inventory page
    await expect(page).toHaveURL(/inventory.html/);

    // Add product to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Open cart
    await page.locator('.shopping_cart_link').click();

    // Proceed to checkout
    await page.locator('[data-test="checkout"]').click();

    // Fill checkout information
    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('10001');

    // Continue checkout
    await page.locator('[data-test="continue"]').click();

    // Finish purchase
    await page.locator('[data-test="finish"]').click();

    // Validate successful order
    await expect(page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');

    // Validate checkout complete page
    await expect(page).toHaveURL(/checkout-complete.html/);
  });

  test('CT-008 - Attempt purchase without login', async ({ page }) => {

    // Access inventory page directly without login
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Validate redirect to login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // Validate login fields displayed
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();

    // Validate error/login protection behavior
    const loginButton = page.locator('[data-test="login-button"]');
    await expect(loginButton).toBeVisible();
  });

});