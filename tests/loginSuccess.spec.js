import { test, expect } from '@playwright/test';
import { LoginPage } from './loginPage';

test('Login success', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Open login page URL.
  await loginPage.goto();

  // Verify login form is displayed
  await loginPage.checkFormDisplay();

  // Fill valid credentials
  await loginPage.fillLoginForm('test@gmail.com', '12345#Test');

  // Ensure login button is enable before clicking.
  await expect(loginPage.loginButton).toBeEnabled(); 
  await loginPage.loginButton.click();

  // Verify successful login.
  await expect(page).toHaveURL(/dashboard/i);
  await expect(page.getByText('Diagnosis List')).toBeVisible;
  await expect(page.getByText('นาย ประสบ อุบัตเหตุ')).toBeVisible;  
});