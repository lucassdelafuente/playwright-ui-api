import { test, expect } from '@playwright/test';
import { DynamicControlPage } from '../pom/dynamicControlPage';

let dynamicControlPage: DynamicControlPage

test.beforeEach(async ({page}) => {
    dynamicControlPage = new DynamicControlPage(page)
    await dynamicControlPage.goToDynamicControlPage()
})

test.describe('Dynamic Control', () =>{

    // Add-Remove
    test('Checkbox should be added', async () => {
        const expectedMessage: string = 'It\'s back!'
        await dynamicControlPage.addRemove();
        await dynamicControlPage.addRemove();
        expect(await dynamicControlPage.addRemoveMessage()).toBe(expectedMessage);
    })
    test('Checkbox should be removed', async () => {
        const expectedMessage: string = 'It\'s gone!'
        await dynamicControlPage.checkCheckbox();
        await dynamicControlPage.addRemove();
        expect(await dynamicControlPage.addRemoveMessage()).toBe(expectedMessage);
    })

    // Enable-Disable
    test('Input should be enabled', async () => {
        const expectedMessage: string = 'It\'s enabled!'
        await dynamicControlPage.enableDisable();
        expect(await dynamicControlPage.enableDisableMessage()).toBe(expectedMessage);
        expect(await dynamicControlPage.isInputEnabled()).toBe(true);
    })
    test('Input should be disabled', async () => {
        const expectedMessage: string = 'It\'s disabled!'
        await dynamicControlPage.enableDisable();
        await dynamicControlPage.enableDisable();
        expect(await dynamicControlPage.enableDisableMessage()).toBe(expectedMessage);
        expect(await dynamicControlPage.isInputEnabled()).toBe(false);
    })

})