import { test, expect } from '@playwright/test';
import { BrokenImagesPage } from '../pom/brokenImagesPage.js';

let brokenImages: BrokenImagesPage;

test.beforeEach(async ({ page }) => {
  brokenImages = new BrokenImagesPage(page);
  await brokenImages.goToBrokenImage()
});

test.describe('Broken Images', () => {

  test('The Images should be broken', async () => {
    expect(await brokenImages.isImageBroken()).toBe(true);
  }) 

});
