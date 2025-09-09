// playwright.config.js
const dotenv = require('dotenv');
const { defineConfig } = require('@playwright/test');
const { devices } = require('@playwright/test');

dotenv.config();

module.exports = defineConfig({
  testDir: './tests',                                       
  timeout: 30 * 1000,                                      
  retries: 0,                                              
  use: {
    headless: true,                                         
    screenshot: 'only-on-failure',                          // Captura tela apenas em falhas
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  reporter: [
    ['pwmochawesome', {
      outputJson: true,
      reportDir: 'mochawesome-report',
      reportTitle: 'Playwright Mochawesome Report',
    }]
  ],
});
