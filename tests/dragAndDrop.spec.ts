import { test, expect } from '@playwright/test';
import { DragAndDropPage } from '@pom/dragAndDropPage';

test.describe('Drag and Drop', () => {
  let dragAndDropPage: DragAndDropPage;
  const expectedResultA = 'A';
  const expectedResultB = 'B';

  test.beforeEach(async ({ page }) => {
    dragAndDropPage = new DragAndDropPage(page);
    await dragAndDropPage.goToDragAndDropPage();
  });

  test('Box A should be moved to box B', async () => {
    await dragAndDropPage.dragAndDrop();

    await expect(dragAndDropPage.boxA).toHaveText(expectedResultB);
    await expect(dragAndDropPage.boxB).toHaveText(expectedResultA);
  });
});
