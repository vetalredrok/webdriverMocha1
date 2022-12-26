

describe('UI Contorls', async ()=> {

    it('UI Contorls ', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        //what if multiple elements $$
        const radioButtons = await $$(".customradio")
        const userDropdown = radioButtons[1]
        await userDropdown.$("span").click() //chaining locators-
        const modal = await $(".modal-body");
        await modal.waitForDisplayed();
        await $("#cancelBtn").click();
        console.log(await $$(".customradio")[0].$("span").isSelected())

        await userDropdown.$("span").click()
        await modal.waitForDisplayed();
        await $('#okayBtn').click();
        await $$(".customradio")[0].$("span").click();
        await expect(modal).not.toBeDisabled();

        let dropDown = await $("select.form-control").selectByAttribute('value', 'teach');
        // await dropDown.selectByAttribute('value', 'teach');

        // dropDown.selectByVisibaleText('Consultant');
        dropDown.selectByVisibleText("Consultant")
    });


})