import { test, expect } from '@fixtures/fixturesBuilder';

test.describe('Login feature', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
  });

  test('Login with valid credentials @login', async ({ loginPage }) => {
    const expectedMessage: RegExp = /You logged into a secure area!/;
    const username: string = 'tomsmith';
    const password: string = 'SuperSecretPassword!';
    await loginPage.login(username, password);

    await expect(loginPage.flashMessage).toHaveText(expectedMessage);
  });

  test('Login with invalid credentials @login', async ({ loginPage }) => {
    const expectedMessage: RegExp = /Your password is invalid!/;
    const username: string = 'tomsmith';
    const password: string = 'SuperSecretPassword!!';
    await loginPage.login(username, password);

    await expect(loginPage.flashMessage).toHaveText(expectedMessage);
  });

  test('Login with invalid username @login', async ({ loginPage }) => {
    const expectedMessage: RegExp = /Your username is invalid!/;
    const username: string = 'tomsmithss';
    const password: string = 'SuperSecretPassword!!';
    await loginPage.login(username, password);

    await expect(loginPage.flashMessage).toHaveText(expectedMessage);
  });
});
