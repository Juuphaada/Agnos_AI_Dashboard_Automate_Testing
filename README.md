## Agnos_AI_Dashboard_Automate_Testing
This repository contains end-to-end automated test scripts for the Agnos AI Dashboard using Playwright.

### IDE
Visual Studio Code   
Version: 1.111.0

Tech Stack
- Node.js
- Playwright
- JavaScript
- Visual Studio Code (IDE)

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
- Run specific test file
  ```bash 
  npx playwright test tests/loginSuccess.spec.js
- Run tests with browser open
  ```bash 
  npx playwright test --headed

### Show Text report 
- npx playwright show-report
