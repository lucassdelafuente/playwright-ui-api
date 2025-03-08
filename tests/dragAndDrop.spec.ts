import { test, expect } from '@fixtures/fixturesBuilder';

test.describe('Drag and Drop feature', () => {
  const expectedResultA = 'A';
  const expectedResultB = 'B';

  test.beforeEach(async ({ dragAndDropPage }) => {
    await dragAndDropPage.goToDragAndDropPage();
  });

  test('Box A should be moved to box B', async ({ dragAndDropPage }) => {
    await dragAndDropPage.dragAndDrop();

    await expect(dragAndDropPage.boxA).toHaveText(expectedResultB);
    await expect(dragAndDropPage.boxB).toHaveText(expectedResultA);
  });
});
