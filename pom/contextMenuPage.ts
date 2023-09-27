import {Page,Locator} from '@playwright/test';

export class ContextMenuPage{
    readonly page: Page;
    readonly contextMenu: Locator;

    constructor(page: Page){
        this.page = page;
        this.contextMenu = this.page.locator('#hot-spot')
    }

    async goToContextMenuPage(): Promise<void>{
        await this.page.goto('https://the-internet.herokuapp.com/context_menu')
    }

    async rightClick(): Promise<void>{
        await this.contextMenu.click({button: 'right'})
    }

    async acceptAlert(): Promise<void>{
       this.page.on('dialog', dialog => dialog.accept());
    }
}