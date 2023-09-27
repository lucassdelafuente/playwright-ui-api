import {Page, Locator} from '@playwright/test';

export class CheckBoxesPage{
    readonly page: Page;
    readonly checkBoxes: Locator;

    constructor(page: Page){
        this.page = page;
        this.checkBoxes = this.page.getByRole('checkbox');
    }

    async goToCheckBoxesPage(): Promise<void>{
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes')
    }

    async isCheckBoxChecked(checkbox: "checkbox 1" | "checkbox 2" ): Promise<boolean>{
        let isChecked: boolean = false;

        switch(checkbox){
            case 'checkbox 1':
                isChecked = await this.checkBoxes.first().isChecked();
                break;
            case 'checkbox 2':
                isChecked = await this.checkBoxes.last().isChecked();
                break;
            
        }

        return isChecked;
    }

    async clickOnCheckbox(checkbox: "checkbox 1" | "checkbox 2" ): Promise<void>{

        switch(checkbox){
            case 'checkbox 1':
                await this.checkBoxes.first().click();
                break;
            case 'checkbox 2':
                await this.checkBoxes.last().click();
                break
        }
        
    }

}