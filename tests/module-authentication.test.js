//execute all tests in headless mode: npx playwright test
//execute all test in visible mode: npx playwright test --headed
import { test, expect } from '@playwright/test';

test.describe('Testing module-authentications', () => {

    function generateDynamicEmail() {
        return `testuser+${Date.now()}@example.com`;
    }

    async function loginPage (page) {
        await page.goto('https://magento.softwaretestingboard.com/');
        await expect(page).toHaveTitle(/Home Page/i);
        await page.waitForSelector('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]', { timeout: 5000 });
        await page.click('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]');
        await page.waitForTimeout(2000)
    }

    test('New user registration and login', async ({page}) => {

        const email = generateDynamicEmail();

        //Step 1: new user registration
        await loginPage(page); 

        await page.click('text=Create an Account');
        await page.fill('#firstname', process.env.FIRSTNAME || '');
        await page.fill('#lastname', process.env.LASTNAME || '');
        await page.fill('#email_address', email);
        await page.fill('#password', process.env.PASS || '');
        await page.fill('#password-confirmation', process.env.PASS || '');
        await page.click('button[title="Create an Account"]');
        await page.waitForTimeout(2000)
        await expect(page.locator('div.message-success')).toContainText('Thank you for registering with Main Website Store.');
        await page.click('button[data-action="customer-menu-toggle"]');
        await page.click('a[href*="customer/account/logout/"]');
        await page.waitForTimeout(2000)

        //Step 2: login with the new user
        await page.click('text=Sign In');
        await page.fill('#email', email);
        await page.fill('#pass', process.env.PASS || '');
        await page.click('button[id="send2"]');
        await page.waitForTimeout(2000)
        await page.waitForSelector('.logged-in', { state: 'visible' });
        //nth() function to select one specific element in a list. 
        await expect(page.locator('.logged-in').nth(1)).toContainText(`Welcome, ${process.env.FIRSTNAME} ${process.env.LASTNAME}!`);

    })

    test('Login with invalid credentials', async ({page}) => {

        await loginPage(page); 
    
        await page.click('text=Sign In');
        await page.fill('#email', process.env.WRONGEMAIL || '');
        await page.fill('#pass', process.env.WRONGPASS || '');
        await page.click('button[id="send2"]');
        await page.waitForTimeout(2000)
        await page.waitForSelector('.message-error.error.message div[data-bind]')
        await expect(page.locator('.message-error.error.message div[data-bind]')).toContainText('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')        
    })
});



