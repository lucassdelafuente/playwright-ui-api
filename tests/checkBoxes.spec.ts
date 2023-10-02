import { expect, test } from '@playwright/test'
import { CheckBoxesPage } from '../pom/checkBoxesPage';

let checkBoxesPage: CheckBoxesPage

test.beforeEach(async ({page}) => {
    checkBoxesPage = new CheckBoxesPage(page);
    await checkBoxesPage.goToCheckBoxesPage()
})

test.describe('Check boxes', () => {

    test('Second check boxes should be checked by default', async () => {
        const actualResult = await checkBoxesPage.isCheckBoxChecked('checkbox 2');

        expect(actualResult).toBe(true);
    })

    test('First check boxes should not be checked by default', async () => {
        const actualResult = await checkBoxesPage.isCheckBoxChecked('checkbox 1');

        expect(actualResult).toBe(false);
    })

    test('Both check boxes should be checked', async () => {
        await checkBoxesPage.clickOnCheckbox('checkbox 1');
        const resultCheck1 = await checkBoxesPage.isCheckBoxChecked('checkbox 1');
        const resultCheck2 = await checkBoxesPage.isCheckBoxChecked('checkbox 2');

        expect(resultCheck1).toBe(true);
        expect(resultCheck2).toBe(true);
    })

});