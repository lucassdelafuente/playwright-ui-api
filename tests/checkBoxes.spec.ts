import { expect, test } from '@fixtures/fixturesBuilder';

test.describe('Check boxes', () => {
  test.beforeEach(async ({ checkBoxesPage }) => {
    await checkBoxesPage.goToCheckBoxesPage();
  });

  test('Second check boxes should be checked by default', async ({
    checkBoxesPage,
  }) => {
    await expect(checkBoxesPage.checkBoxes.last()).toBeChecked();
  });

  test('First check boxes should not be checked by default', async ({
    checkBoxesPage,
  }) => {
    await expect(checkBoxesPage.checkBoxes.first()).toBeChecked({
      checked: false,
    });
  });

  test('Both check boxes should be checked', async ({ checkBoxesPage }) => {
    await checkBoxesPage.clickOnCheckbox('checkbox 1');

    await expect(checkBoxesPage.checkBoxes.first()).toBeChecked();
    await expect(checkBoxesPage.checkBoxes.last()).toBeChecked();
  });
});
