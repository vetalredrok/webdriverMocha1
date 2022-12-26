describe('Ecommerce Application',  () => {

    xit('Login Fail page',  async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
        await $("#username").setValue("rahulshettyacademy ");

        const password = await $("//input[@type='password']");
        await password.setValue("learningss");

        await $('#signInBtn').click();

//        await browser.waitUntil(async () => await $('#signInBtn').getAttribute('value') === 'Sign In', {
// timeout: 5000,
//            timeoutMsg: 'Error message'
//        })

        await browser.waitUntil( async () => {
           return  await $('#signInBtn').getAttribute('value') === 'Sign In'
        }, {
            timeout: 5000,
            timeoutMsg: 'Error Message'
        })

        console.log(await $('.alert-danger').getText());

        await expect($('p')).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
    });


    xit('Login Success page title ', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");

        await $("#username").setValue("rahulshettyacademy");

        const password = await $("//input[@type='password']");
        await password.setValue("learning");

        await $('#signInBtn').click();
        await $('a.btn-primary').waitForExist();
        await expect(browser).toHaveUrlContaining("shop");
        await expect(browser).toHaveTitle("ProtoCommerce");
    });
})