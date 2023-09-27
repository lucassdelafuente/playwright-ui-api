import {Page, expect, test} from '@playwright/test';
import { ContextMenuPage } from '../pom/contextMenuPage';

let contextMenu: ContextMenuPage

test.beforeEach(async ({page}) => {
    contextMenu = new ContextMenuPage(page);
    await contextMenu.goToContextMenuPage()
})

test.describe('Context menu', () => {

    test('Alert should be displayed after right click', async () => {
        await contextMenu.rightClick();
        await contextMenu.acceptAlert();
    })

});