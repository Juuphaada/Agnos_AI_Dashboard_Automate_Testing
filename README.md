## Agnos AI Dashboard Automate Testing
This repository contains end-to-end automated test scripts for the Agnos AI Dashboard using Playwright.

### Test case
- TC_Register_Success_001

### Tech Stack
- Node.js
- Playwright
- JavaScript
- Visual Studio Code IDE  Version 1.111.0

### Environment Set up
- ```bash 
  npm init playwright@latest
- type "y" to proceed
- Select language : JavaScript
- Put end-to-end tests : tests

### Execute the tests
- Execute all tests:
  ```bash 
  npx playwright test
- Run specific test file:
  ```bash 
  npx playwright test tests/loginSuccess.spec.js
- Run tests with browser open:
  ```bash 
  npx playwright test --headed

### Show Text report 
  ```bash  npx playwright show-report
  
