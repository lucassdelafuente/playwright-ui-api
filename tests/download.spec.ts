import { test, expect} from '@playwright/test';
import { DownloadPage } from '../pom/downloadPage';

let downloadPage: DownloadPage

test.beforeEach(async ({page}) => {
    downloadPage = new DownloadPage(page)
    await downloadPage.goToDownloadPage()
})

test.describe('Download', () =>{
    test('File should be downloaded', async () => {
        const fileName: string = 'some-file.txt'
        const download = await downloadPage.downloadFile(fileName)
        const actualResult: boolean = await downloadPage.isTheSameName(fileName, download)
        expect(actualResult).toBe(true);
    })
})