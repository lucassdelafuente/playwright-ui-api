import { test, expect } from '@fixtures/fixturesBuilder';

test.describe('Dynamic Loading feature', () => {
  test('Hello world text should be visible on Example 1 page', async ({
    dynamicLoadingPage,
  }) => {
    await dynamicLoadingPage.goToExample1();
    await dynamicLoadingPage.startLoad();
    await dynamicLoadingPage.loadingBar.waitFor({ state: 'hidden' });

    await expect(dynamicLoadingPage.helloWorldTxt).toBeVisible();
  });

  test('Hello world text should be visible on Example 2 page', async ({
    dynamicLoadingPage,
  }) => {
    await dynamicLoadingPage.goToExample2();
    await dynamicLoadingPage.startLoad();
    await dynamicLoadingPage.loadingBar.waitFor({ state: 'hidden' });

    await expect(dynamicLoadingPage.helloWorldTxt).toBeVisible();
  });
});
