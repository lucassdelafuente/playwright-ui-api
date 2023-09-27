import { Page, Locator, Download } from '@playwright/test';

export class DownloadPage{
    readonly page: Page;
    readonly downloadLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.downloadLink = this.page.locator('div[class="example"] a');
    }

    async goToDownloadPage(): Promise<void>{
        await this.page.goto('https://the-internet.herokuapp.com/download')
    }

    async downloadFile(fileName: string): Promise<Download>{
        const numberOfLinks: number = await this.downloadLink.count();
        for(let i=0; i<numberOfLinks; i++){
            const href = await this.downloadLink.nth(i).getAttribute('href');
            if (href?.includes(fileName)) {
                const [download] = await Promise.all([
                    this.page.waitForEvent('download'),
                    this.downloadLink.nth(i).click()
                ])
                return download               
            }
        }

        return Promise.reject(new Error('File not found'));
    }

    async isTheSameName(fileName: string, download: Download): Promise<boolean>{
        const downloadName:string = download.suggestedFilename()
        return (downloadName === fileName) ? true : false;
    }

}