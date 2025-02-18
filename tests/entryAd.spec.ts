import { expect, test } from '@playwright/test';
import { EntryAdPage } from '@pom/entryAdPage.js';

test.describe('Entry ad option', () => {
  let entryAd: EntryAdPage;

  test.beforeEach(async ({ page }) => {
    entryAd = new EntryAdPage(page);
    await entryAd.goToEntryAdPage();
  });

  test('The Modal title should be "This is a modal window"', async () => {
    const expectedText: string = 'This is a modal window';

    await expect(entryAd.modalTitle).toContainText(expectedText, {
      ignoreCase: true,
    });
  });
});
