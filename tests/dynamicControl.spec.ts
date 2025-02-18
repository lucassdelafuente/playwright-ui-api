import { test, expect } from '@playwright/test';
import { DynamicControlPage } from '@pom/dynamicControlPage';

test.describe('Dynamic Control', () => {
  let dynamicControlPage: DynamicControlPage;

  test.beforeEach(async ({ page }) => {
    dynamicControlPage = new DynamicControlPage(page);
    await dynamicControlPage.goToDynamicControlPage();
  });

  // Add-Remove
  test('Checkbox should be added', async () => {
    const expectedMessage: string = "It's back!";
    await dynamicControlPage.addRemove();
    await dynamicControlPage.addRemove();

    await expect(dynamicControlPage.addRemoveMsg).toHaveText(expectedMessage);
  });
  test('Checkbox should be removed', async () => {
    const expectedMessage: string = "It's gone!";
    await dynamicControlPage.checkCheckbox();
    await dynamicControlPage.addRemove();

    await expect(dynamicControlPage.addRemoveMsg).toHaveText(expectedMessage);
  });

  // Enable-Disable
  test('Input should be enabled', async () => {
    const expectedMessage: string = "It's enabled!";
    await dynamicControlPage.enableDisable();

    await expect(dynamicControlPage.enableDisableMsg).toHaveText(
      expectedMessage
    );
    await expect(dynamicControlPage.inputTxt).toBeEnabled();
  });
  test('Input should be disabled', async () => {
    const expectedMessage: string = "It's disabled!";
    await dynamicControlPage.enableDisable();
    await dynamicControlPage.enableDisable();

    await expect(dynamicControlPage.enableDisableMsg).toHaveText(
      expectedMessage
    );
    await expect(dynamicControlPage.inputTxt).toBeDisabled();
  });
});
