import { Page,Locator } from '@playwright/test';

export class EntryAdPage{
    readonly page: Page;
    readonly modalTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.modalTitle = this.page.locator('div[class="modal-title"]');
    }

    async goToEntryAdPage(): Promise<void>{
        await this.page.goto('https://the-internet.herokuapp.com/entry_ad')
    }
}