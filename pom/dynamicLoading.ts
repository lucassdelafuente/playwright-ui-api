import { Page, Locator } from '@playwright/test';

class DynamicLoadingPage{
    readonly page: Page;
    readonly startBtn: Locator;
    readonly loadingBar: Locator;
    readonly helloWorldTxt: Locator;

    constructor(page: Page){
        this.page = page;
        this.startBtn = this.page.getByText('Start', {exact: true});
        this.loadingBar = this.page.locator('id=loading')
        this.helloWorldTxt = this.page.getByText('Hello World!', {exact: true});
    }

    async goToExample1(): Promise<void>{
        await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading/1')
    }

    async goToExample2(): Promise<void>{
        await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading/2')
    }

    async startLoad(): Promise<void>{
        await this.startBtn.click();
    }
}

export default DynamicLoadingPage;