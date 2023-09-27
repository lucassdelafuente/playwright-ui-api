import { test, expect} from '@playwright/test';
import DynamicLoadingPage from '../pom/dynamicLoading';

let dynamicLoadingPage: DynamicLoadingPage

test.beforeEach(async ({page}) => {
    dynamicLoadingPage = new DynamicLoadingPage(page);
});


test.describe('Dynamic Loading', () => {

    test('Hello world text should then visible on Example 1 page', async () => {
        await dynamicLoadingPage.goToExample1();
        await dynamicLoadingPage.startLoad();
        await dynamicLoadingPage.loadingBar.waitFor({ state: 'hidden' });
        await expect(dynamicLoadingPage.helloWorldTxt).toBeVisible();
    })

    test('Hello world text should then visible on Example 2 page', async () => {
        await dynamicLoadingPage.goToExample2();
        await dynamicLoadingPage.startLoad();
        await dynamicLoadingPage.loadingBar.waitFor({ state: 'hidden' });
        await expect(dynamicLoadingPage.helloWorldTxt).toBeVisible();
    })

});