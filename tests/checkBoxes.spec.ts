import { expect, test } from '@playwright/test';
import { CheckBoxesPage } from '@pom/checkBoxesPage';

test.describe('Check boxes', () => {
  let checkBoxesPage: CheckBoxesPage;

  test.beforeEach(async ({ page }) => {
    checkBoxesPage = new CheckBoxesPage(page);
    await checkBoxesPage.goToCheckBoxesPage();
  });

  test('Second check boxes should be checked by default', async () => {
    await expect(checkBoxesPage.checkBoxes.last()).toBeChecked();
  });

  test('First check boxes should not be checked by default', async () => {
    await expect(checkBoxesPage.checkBoxes.first()).toBeChecked({
      checked: false,
    });
  });

  test('Both check boxes should be checked', async () => {
    await checkBoxesPage.clickOnCheckbox('checkbox 1');

    await expect(checkBoxesPage.checkBoxes.first()).toBeChecked();
    await expect(checkBoxesPage.checkBoxes.last()).toBeChecked();
  });
});
