import { Page } from 'playwright';

export class MainPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToHomePage(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }
}
