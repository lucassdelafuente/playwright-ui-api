import { Page, Locator } from '@playwright/test';

export class BrokenImagesPage {
  readonly page: Page;
  readonly images: Locator;

  constructor(page: Page) {
    this.page = page;
    this.images = this.page.locator('div[class="example"] img');
  }

  async goToBrokenImage(): Promise<void> {
    await this.page.goto('/broken_images');
  }

  async getImages(): Promise<string[]> {
    const numberOfImages: number = await this.images.count();
    const srcArray: string[] = [];

    for (let i = 0; i < numberOfImages; i++) {
      const attribute = await this.images.nth(i).getAttribute('src');

      if (typeof attribute === 'string') {
        srcArray.push(attribute);
      }
    }

    return srcArray.filter((src) => src !== undefined) as string[];
  }

  async isImageBroken(): Promise<boolean> {
    const src = await this.getImages();
    const requests = await Promise.all(
      src.map(async (s) => {
        try {
          const request = await this.page.request.get(`/${s}`);

          return request.status();
        } catch (error) {
          return 0;
        }
      })
    );

    return requests.some((status) => status !== 200);
  }
}
