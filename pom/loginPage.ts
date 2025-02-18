import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = this.page.locator('#username');
    this.password = this.page.locator('#password');
    this.loginButton = this.page.locator('button[type="submit"]');
    this.flashMessage = this.page.locator('#flash');
  }

  async goToLoginPage(): Promise<void> {
    await this.page.goto('/login');
  }

  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
