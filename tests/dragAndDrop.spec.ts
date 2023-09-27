import { test, expect} from '@playwright/test'
import { DragAndDropPage } from '../pom/dragAndDropPage'

let dragAndDropPage: DragAndDropPage

test.beforeEach(async ({page}) => {
    dragAndDropPage = new DragAndDropPage(page)
    await dragAndDropPage.goToDragAndDropPage()
})

test.describe('Drag and Drop', () =>{

    test('Box A should be moved to box B', async () => {
        await dragAndDropPage.dragAndDrop();
        expect(await dragAndDropPage.getBoxAText()).toBe('B');
        expect(await dragAndDropPage.getBoxBText()).toBe('A');
    })

})