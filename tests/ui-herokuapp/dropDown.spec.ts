import { test } from '@fixtures/fixturesBuilder';
import { expect } from '@playwright/test';

test.describe('Drop Down feature', () => {
  test.beforeEach(async ({ dropDownPage }) => {
    await dropDownPage.goToDropDownPage();
  });

  // It's not possible to use toHaveText() because the locator doesn't change the text
  test('"Please select an option" should be selected by default', async ({
    dropDownPage,
  }) => {
    const expectedOption: string = 'Please select an option';

    expect(await dropDownPage.getSelectedOption()).toBe(expectedOption);
  });

  test('Option 2 should be selected', async ({ dropDownPage }) => {
    const expectedOption: string = 'Option 2';
    await dropDownPage.selectOption(expectedOption);

    expect(await dropDownPage.getSelectedOption()).toBe(expectedOption);
  });
});
