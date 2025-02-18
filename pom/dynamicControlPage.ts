import { Page, Locator } from '@playwright/test';

export class DynamicControlPage {
  readonly page: Page;
  readonly checkbox: Locator;
  readonly addRemoveBtn: Locator;
  readonly enableDisableBtn: Locator;
  readonly addRemoveMsg: Locator;
  readonly inputTxt: Locator;
  readonly enableDisableMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    // Add-Remove
    this.checkbox = this.page.locator('#checkbox');
    this.addRemoveBtn = this.page.locator('#checkbox-example button');
    this.addRemoveMsg = this.page.locator('#message');
    // Disable-Enable
    this.enableDisableBtn = this.page.locator('button[onclick="swapInput()"]');
    this.inputTxt = this.page.locator('input[type="text"]');
    this.enableDisableMsg = this.page.locator(
      'form[id="input-example"] p[id="message"]'
    );
  }

  async goToDynamicControlPage(): Promise<void> {
    await this.page.goto('/dynamic_controls');
  }

  // Add-Remove
  async addRemove(): Promise<void> {
    await this.addRemoveBtn.click();
  }

  async checkCheckbox(): Promise<void> {
    await this.checkbox.click();
  }

  // Disable-Enable
  async enableDisable(): Promise<void> {
    await this.enableDisableBtn.click();
  }
}
