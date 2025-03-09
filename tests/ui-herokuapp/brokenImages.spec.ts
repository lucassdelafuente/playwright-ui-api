import { test } from '@fixtures/fixturesBuilder';
import { expect } from '@playwright/test';

test.describe('Broken Images feature', () => {
  test.beforeEach(async ({ brokenImagesPage }) => {
    await brokenImagesPage.goToBrokenImage();
  });

  test('The Images should be broken', async ({ brokenImagesPage }) => {
    expect(await brokenImagesPage.isImageBroken()).toBe(true);
  });
});
