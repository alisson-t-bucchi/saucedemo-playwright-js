# ⚙️ Playwright test suite for Saucedemo Page by Swag Labs. 

## 📌 1. Introduction
This test plan aims to validate the main functionalities of the [Swag Labs](https://www.saucedemo.com/) website to ensure users have a consistent and error-free experience. The tests will be automated in a **GitHub Actions** pipeline with **Playwright** including report test cases with **Mochawesome Reports**. 

---

## 📌 2. Scope
The tests will cover the following key functionalities:
✅ Authentication (Login/Logout, User Registration)  
✅ Product Search and Navigation  
✅ Adding and Removing Items from the Cart  
✅ Checkout and Payment Process (if applicable)  
✅ Responsiveness Verification  

---

## 📌 3. Testing Approach
**Tool:** Playwright  
**Types of Tests:**  
- Functional Tests  
- UI Tests (element validation)  
- Responsiveness Tests  
- User Flow Tests  
- Business Rule Tests  

---

## 📌 4. Test Cases
⚠️ Note:
SauceDemo does not provide a native search functionality and does not allow cart/checkout actions without authentication.
Some test cases were adapted to reflect the real application behavior while preserving the original business intent.

---

### **🛠️ Module: Authentication**  
| ID    | Test Case                         | Steps | Expected Result |
|-------|-----------------------------------|--------|--------------------|
| CT-001 | Login with valid credentials    | 1. Access the login page <br> 2. Enter correct email and password <br> 3. Click "Sign In" | User successfully logged in |
| CT-002 | Login with invalid credentials  | 1. Access the login page <br> 2. Enter incorrect email/password <br> 3. Click "Sign In" | Error message displayed |

---

## 🛍️ Module: Search and Cart
| ID      | Test Case               | Steps | Expected Result |
|----------|--------------------------|--------|------------------|
| CT-004 | Validate product visibility in inventory | 1. Login into the application <br> 2. Locate a product in the inventory list | Product displayed successfully |
| CT-005 | Add product to cart | 1. Login into the application <br> 2. Select a product <br> 3. Click "Add to Cart" | Product added to the cart |
| CT-006 | Remove item from cart | 1. Login into the application <br> 2. Add a product to the cart <br> 3. Access the cart <br> 4. Click "Remove" | Product removed from the cart |

---

## 💳 Module: Checkout
| ID      | Test Case               | Steps | Expected Result |
|----------|--------------------------|--------|------------------|
| CT-007 | Successfully complete purchase | 1. Login into the application <br> 2. Add product to the cart <br> 3. Go to checkout <br> 4. Fill in customer details <br> 5. Confirm purchase | Order successfully placed |
| CT-008 | Validate checkout protection without login | 1. Attempt to access inventory or checkout page without authentication | User redirected to login page and authentication required |

---
## 📌 5. Execution and Reports

Attention!
Somentimes before running the test with Playwright it's necessary a PowerShell execution policy issue. 
Prevent future problems using the code bellow into a PowerShell as Administrator windows:

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then type Y and press Enter to confirm. Now, Playwright is accessible to be executed by the system. 

**Test Execution:**  
```bash
npx playwright test
```

**Execution with visible browser:**  
```bash
npx playwright test --headed
```

**Generate HTML Report:**  
```bash
npx playwright test --reporter=html
```
After execution, open `playwright-report/index.html` to view the results.

**Generate Mochawesome Report:**  
Open mochawesome-report folder and find mochawesome.html, click-right button on file and open with Open Live Server installed previously.  

---

## ⚙️ 6. CI/CD with GitHub Actions

This project includes Continuous Integration using GitHub Actions.

The workflow automatically:

- Installs dependencies
- Installs Playwright browsers
- Runs all automated tests
- Uploads the Playwright HTML report as an artifact

### Workflow Location

```txt
.github/workflows/playwright.yml
```

### Trigger Events

The pipeline runs on:

- Push to:
  - main
  - master
  - develop

- Pull Requests to:
  - main
  - master
  - develop

- Manual execution via GitHub Actions UI

### View Test Reports

After execution:

1. Open the repository on GitHub
2. Go to "Actions"
3. Select the workflow run
4. Download the `playwright-report` artifact

## 📌 7. Conclusion
This plan covers the essential flows of the Magento website. Additional cases can be added as needed to cover more user scenarios.

🚀 **Happy Testing!**
