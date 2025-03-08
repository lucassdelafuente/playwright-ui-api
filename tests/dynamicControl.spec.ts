import { test, expect } from '@fixtures/fixturesBuilder';

test.describe('Dynamic Control feature', () => {
  test.beforeEach(async ({ dynamicControlPage }) => {
    await dynamicControlPage.goToDynamicControlPage();
  });

  // Add-Remove
  test('Checkbox should be added', async ({ dynamicControlPage }) => {
    const expectedMessage: string = "It's back!";
    await dynamicControlPage.addRemove();
    await dynamicControlPage.addRemove();

    await expect(dynamicControlPage.addRemoveMsg).toHaveText(expectedMessage);
  });
  test('Checkbox should be removed', async ({ dynamicControlPage }) => {
    const expectedMessage: string = "It's gone!";
    await dynamicControlPage.checkCheckbox();
    await dynamicControlPage.addRemove();

    await expect(dynamicControlPage.addRemoveMsg).toHaveText(expectedMessage);
  });

  // Enable-Disable
  test('Input should be enabled', async ({ dynamicControlPage }) => {
    const expectedMessage: string = "It's enabled!";
    await dynamicControlPage.enableDisable();

    await expect(dynamicControlPage.enableDisableMsg).toHaveText(
      expectedMessage
    );
    await expect(dynamicControlPage.inputTxt).toBeEnabled();
  });
  test('Input should be disabled', async ({ dynamicControlPage }) => {
    const expectedMessage: string = "It's disabled!";
    await dynamicControlPage.enableDisable();
    await dynamicControlPage.enableDisable();

    await expect(dynamicControlPage.enableDisableMsg).toHaveText(
      expectedMessage
    );
    await expect(dynamicControlPage.inputTxt).toBeDisabled();
  });
});
