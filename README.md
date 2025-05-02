# 📌 Test Plan - Magento Store

## 📌 1. Introduction
This test plan aims to validate the main functionalities of the [Magento](https://magento.softwaretestingboard.com/) website to ensure users have a consistent and error-free experience. The tests will be automated using **Playwright**.

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
**📌 Tool:** Playwright  
**📌 Types of Tests:**  
- Functional Tests  
- UI Tests (element validation)  
- Responsiveness Tests  
- User Flow Tests  
- Business Rule Tests  

---

## 📌 4. Test Cases

### **🛠️ Module: Authentication**  
| ID    | Test Case                         | Steps | Expected Result |
|-------|-----------------------------------|--------|--------------------|
| CT-001 | Login with valid credentials    | 1. Access the login page <br> 2. Enter correct email and password <br> 3. Click "Sign In" | User successfully logged in |
| CT-002 | Login with invalid credentials  | 1. Access the login page <br> 2. Enter incorrect email/password <br> 3. Click "Sign In" | Error message displayed |
| CT-003 | New user registration           | 1. Access "Create an Account" <br> 2. Fill in the details <br> 3. Click "Create Account" | Account successfully created |

---

### **🛍️ Module: Search and Cart**  
| ID    | Test Case                         | Steps | Expected Result |
|-------|-----------------------------------|--------|--------------------|
| CT-004 | Search for a product            | 1. Type a product in the search bar <br> 2. Click "Search" | Product list displayed |
| CT-005 | Add product to cart             | 1. Select a product <br> 2. Click "Add to Cart" | Product added to the cart |
| CT-006 | Remove item from cart           | 1. Access the cart <br> 2. Click "Remove" | Product removed |

---

### **💳 Module: Checkout**  
| ID    | Test Case                         | Steps | Expected Result |
|-------|-----------------------------------|--------|--------------------|
| CT-007 | Successfully complete purchase  | 1. Add product to the cart <br> 2. Go to checkout <br> 3. Fill in the details and confirm | Order successfully placed |
| CT-008 | Attempt purchase without login  | 1. Add product to the cart <br> 2. Proceed to checkout without logging in | Message indicating login requirement |

---

## 📌 5. Execution and Reports

Attention!
Somentimes before running the test with Playwright it's necessary a PowerShell execution policy issue. 
Prevent future problems using the code bellow into a PowerShell as Administrator windows:

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then type Y and press Enter to confirm. Now, Playwright is accessible to be executed by the system. 

📌 **Test Execution:**  
```bash
npx playwright test
```

📌 **Execution with visible browser:**  
```bash
npx playwright test --headed
```

📌 **Generate HTML Report:**  
```bash
npx playwright test --reporter=html
```
After execution, open `playwright-report/index.html` to view the results.

---

## 📌 6. Conclusion
This plan covers the essential flows of the Magento website. Additional cases can be added as needed to cover more user scenarios.

🚀 **Happy Testing!**
