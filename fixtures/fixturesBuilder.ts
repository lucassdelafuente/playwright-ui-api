import { test as base } from '@playwright/test';
import { BrokenImagesPage } from '../pom/brokenImagesPage';
import { CheckBoxesPage } from '../pom/checkBoxesPage';

// Declare the types of the fixtures.
interface MyFixtures {
  brokenImagesPage: BrokenImagesPage;
  checkBoxesPage: CheckBoxesPage;
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
});

export { expect } from '@playwright/test';
