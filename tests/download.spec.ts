import { test, expect } from '@fixtures/fixturesBuilder';

test.describe('Download feature feature', () => {
  test.beforeEach(async ({ downloadPage }) => {
    await downloadPage.goToDownloadPage();
  });

  test('File should be downloaded', async ({ downloadPage }) => {
    const fileName: string = 'some-file.txt';
    const download = await downloadPage.downloadFile(fileName);
    const actualResult: boolean = await downloadPage.isTheSameName(
      fileName,
      download
    );

    expect(actualResult).toBe(true);
  });
});
