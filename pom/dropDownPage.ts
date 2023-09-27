import {Page, Locator} from '@playwright/test';

export class DropDownPage{
    readonly page: Page;
    readonly dropDown: Locator;
    readonly options: Locator;

    constructor(page: Page){
        this.page = page;
        this.dropDown = this.page.locator('#dropdown');
        this.options = this.page.locator('#dropdown option')
    }

    async goToDropDownPage(): Promise<void>{
        await this.page.goto('https://the-internet.herokuapp.com/dropdown')
    }

    async selectOption(option: string): Promise<void>{
        await this.dropDown.selectOption({label: option})
    }

    async getSelectedOption(): Promise<string>{
        const numberOfOptions: number = await this.options.count();

        for(let i=0; i<numberOfOptions; i++){
            const attribute = await this.options.nth(i).getAttribute('selected');
            if (attribute === 'selected') {
                return await this.options.nth(i).innerText();
            }
        }

        return 'No option selected'
    }
}