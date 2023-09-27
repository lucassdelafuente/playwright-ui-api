import {Page, Locator} from '@playwright/test';

export class DragAndDropPage{
    readonly page: Page;
    readonly boxA: Locator;
    readonly boxB: Locator;

    constructor(page: Page){
        this.page = page;
        this.boxA = this.page.locator('#column-a');
        this.boxB = this.page.locator('#column-b');
    }

    async goToDragAndDropPage(): Promise<void>{
        await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    }

    // This is one option to drag and drop, but if we wold have more than 2 boxes, we would have to pass the boxes as parameters

    async dragAndDrop(): Promise<void>{
        await this.boxA.dragTo(this.boxB)
    }

    async getBoxAText(): Promise<string>{
        return await this.boxA.innerText();
    }

    async getBoxBText(): Promise<string>{
        return await this.boxB.innerText();
    }
}