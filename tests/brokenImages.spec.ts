import { test, expect } from '@fixtures/fixturesBuilder';

test.describe('Broken Images feature', () => {
  test.beforeEach(async ({ brokenImagesPage }) => {
    await brokenImagesPage.goToBrokenImage();
  });

  test('The Images should be broken', async ({ brokenImagesPage }) => {
    expect(await brokenImagesPage.isImageBroken()).toBe(true);
  });
});
