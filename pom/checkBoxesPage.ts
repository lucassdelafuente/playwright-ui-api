import { Page, Locator } from '@playwright/test';

export class CheckBoxesPage {
  readonly page: Page;
  readonly checkBoxes: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkBoxes = this.page.getByRole('checkbox');
  }

  async goToCheckBoxesPage(): Promise<void> {
    await this.page.goto('/checkboxes');
  }

  async clickOnCheckbox(checkbox: 'checkbox 1' | 'checkbox 2'): Promise<void> {
    switch (checkbox) {
      case 'checkbox 1':
        await this.checkBoxes.first().click();
        break;
      case 'checkbox 2':
        await this.checkBoxes.last().click();
        break;
    }
  }
}
