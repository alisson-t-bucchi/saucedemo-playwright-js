import { test, expect } from '@playwright/test';

test.describe('Inventory and Cart Features', () => {

  test.beforeEach(async ({ page }) => {
    // Access application
    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Validate inventory page
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('CT-004 - Search for a product', async ({ page }) => {

    // NOTE:
    // SauceDemo does not provide a native search bar.
    // This test simulates product search using product filtering logic.

    const productName = 'Sauce Labs Backpack';

    // Locate product in inventory list
    const product = page.locator('.inventory_item_name', {
      hasText: productName
    });

    // Validate product displayed
    await expect(product).toBeVisible();
  });

  test('CT-005 - Add product to cart', async ({ page }) => {

    const productName = 'Sauce Labs Backpack';

    // Add product to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Validate cart badge
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    // Access cart
    await page.locator('.shopping_cart_link').click();

    // Validate product added
    const cartItem = page.locator('.inventory_item_name', {
      hasText: productName
    });

    await expect(cartItem).toBeVisible();
  });

  test('CT-006 - Remove item from cart', async ({ page }) => {

    const productName = 'Sauce Labs Backpack';

    // Add product first
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Open cart
    await page.locator('.shopping_cart_link').click();

    // Remove product
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    // Validate product removed
    const cartItem = page.locator('.inventory_item_name', {
      hasText: productName
    });

    await expect(cartItem).toHaveCount(0);

    // Validate cart badge removed
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  });

});