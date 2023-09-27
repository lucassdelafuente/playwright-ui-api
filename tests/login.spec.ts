import {test, expect} from '@playwright/test';
import { LoginPage } from '../pom/loginPage';

let loginPage: LoginPage

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    await loginPage.goToLoginPage()
})

test.describe('Login', () =>{
    test('Login with valid credentials', async () => {
        const expectedMessage: RegExp = /You logged into a secure area!/;
        const username: string = 'tomsmith';
        const password: string = 'SuperSecretPassword!';
        await loginPage.login(username, password);
        await expect(loginPage.flashMessage).toHaveText(expectedMessage);
    })

    test('Login with invalid credentials', async () => {
        const expectedMessage: RegExp = /Your password is invalid!/;
        const username: string = 'tomsmith';
        const password: string = 'SuperSecretPassword!!';
        await loginPage.login(username, password);
        await expect(loginPage.flashMessage).toHaveText(expectedMessage);
    })

    test('Login with invalid username', async () => {
        const expectedMessage: RegExp = /Your username is invalid!/;
        const username: string = 'tomsmithss';
        const password: string = 'SuperSecretPassword!!';
        await loginPage.login(username, password);
        await expect(loginPage.flashMessage).toHaveText(expectedMessage);
    })

})