module.exports = function () {

    this.Given(/^I am online at "([^"]*)"/, function (url) {
        return helpers.openPage(url);
    });
      
    this.When(/^I login with email "([^"]*)" and password "([^"]*)"$/, function (email, password) {
        return pageObjects.login.loginToApp(email, password);
    });

    this.Then(/^I should see homepage$/, function () {
        return helpers.waitForLinkText("Users", false, 30);
    });

    this.Then(/^I should go back one page$/, function () {
        return page.goBack();
    });
};
