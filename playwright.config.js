// playwright.config.js
const dotenv = require('dotenv');
const { defineConfig } = require('@playwright/test');

dotenv.config();

module.exports = defineConfig({
  testDir: './tests',                                       
  timeout: 30 * 1000,                                      
  retries: 0,                                              
  use: {
    headless: false,                                        
    baseURL: 'https://magento.softwaretestingboard.com', 
    screenshot: 'only-on-failure',                          // Captura tela apenas em falhas
  },
  projects: [
    {
      name: 'edge', 
      use: {
        browserName: 'chromium',
        channel: 'msedge',
      }
    }
  ],
  reporter: [
    ['pwmochawesome', {
      outputJson: true,
      reportDir: 'mochawesome-report',
      reportTitle: 'Playwright Mochawesome Report',
    }]
  ],
});
