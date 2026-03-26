import { expect } from '@playwright/test';
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#Email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button:has-text("Sign in")');
  }

  // Navigate to login page
  async goto() {
    await this.page.goto('https://dev.app.agnoshealth.com/ai_dashboard/agnos/sign_in');
  }

  // Verify login form elements are visible
  async checkFormDisplay() {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  // Fill login credentials
  async fillLoginForm(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }
}