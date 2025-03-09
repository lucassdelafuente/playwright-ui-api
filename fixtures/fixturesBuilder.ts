import { test as base } from '@playwright/test';
import { DownloadPage } from '@pom/downloadPage';
import { BrokenImagesPage } from '../pom/brokenImagesPage';
import { CheckBoxesPage } from '../pom/checkBoxesPage';
import { DragAndDropPage } from '../pom/dragAndDropPage';
import { DropDownPage } from '../pom/dropDownPage';
import { DynamicControlPage } from '../pom/dynamicControlPage';
import { DynamicLoadingPage } from '../pom/dynamicLoadingPage';
import { EntryAdPage } from '../pom/entryAdPage';
import { GeolocationPage } from '../pom/geolocationPage';
import { LoginPage } from '../pom/loginPage';
import { MainPage } from '../pom/mainPage';

// Declare the types of the fixtures.
interface MyFixtures {
  brokenImagesPage: BrokenImagesPage;
  checkBoxesPage: CheckBoxesPage;
  downloadPage: DownloadPage;
  dragAndDropPage: DragAndDropPage;
  dropDownPage: DropDownPage;
  dynamicControlPage: DynamicControlPage;
  dynamicLoadingPage: DynamicLoadingPage;
  entryAdPage: EntryAdPage;
  geolocationPage: GeolocationPage;
  loginPage: LoginPage;
  mainPage: MainPage;
}

// Extend base test
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  brokenImagesPage: async ({ page }, use) => {
    const brokenImagesPage = new BrokenImagesPage(page);

    await use(brokenImagesPage);
  },
  checkBoxesPage: async ({ page }, use) => {
    const checkBoxesPage = new CheckBoxesPage(page);

    await use(checkBoxesPage);
  },
  downloadPage: async ({ page }, use) => {
    const downloadPage = new DownloadPage(page);

    await use(downloadPage);
  },
  dragAndDropPage: async ({ page }, use) => {
    const dragAndDropPage = new DragAndDropPage(page);

    await use(dragAndDropPage);
  },
  dropDownPage: async ({ page }, use) => {
    const dropDownPage = new DropDownPage(page);

    await use(dropDownPage);
  },
  dynamicControlPage: async ({ page }, use) => {
    const dynamicControlPage = new DynamicControlPage(page);

    await use(dynamicControlPage);
  },
  dynamicLoadingPage: async ({ page }, use) => {
    const dynamicLoadingPage = new DynamicLoadingPage(page);

    await use(dynamicLoadingPage);
  },
  entryAdPage: async ({ page }, use) => {
    const entryAdPage = new EntryAdPage(page);

    await use(entryAdPage);
  },
  geolocationPage: async ({ page }, use) => {
    const geolocationPage = new GeolocationPage(page);

    await use(geolocationPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);

    await use(mainPage);
  },
});
