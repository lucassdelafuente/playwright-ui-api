import { test, expect} from '@playwright/test'
import { DropDownPage } from '../pom/dropDownPage'

let dropDown: DropDownPage

test.beforeEach(async ({page}) => {
    dropDown = new DropDownPage(page)
    await dropDown.goToDropDownPage()
})

test.describe('Drop Down', () =>{

    test('"Please select an option" should be selected by default', async () => {
        const expectedOption: string = 'Please select an option'
        expect(await dropDown.getSelectedOption()).toBe(expectedOption);
    })
    test('Option 2 should be selected', async () => {
        const expectedOption: string = 'Option 2'
        await dropDown.selectOption(expectedOption);
        expect(await dropDown.getSelectedOption()).toBe(expectedOption);
    })
})