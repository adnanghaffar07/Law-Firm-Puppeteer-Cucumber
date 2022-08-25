const { assert } = require("chai");
const helpers = require("../../runtime/helpers");

module.exports = function () {

    this.Then(/^I add user with user name "([^"]*)", email "([^"]*)" and role "([^"]*)"$/, function (user, email, role) {
        return pageObjects.manageUsers.addUser(user, email, role);
    });

    this.Then(/^I see user with email "([^"]*)"$/, async function (email) {
        await page.waitForTimeout(5000);
        return helpers.waitForTdText(email, false, 30);
    });

    this.Then(/^I edit the user with user name "([^"]*)"$/, async function(userName) {
        await page.waitForTimeout(5000);
        return pageObjects.manageUsers.editUserWithUserName(userName);
    });

    this.Then(/^I see user with user name "([^"]*)"$/, async function (name) {
        await page.waitForTimeout(10000);
        return helpers.waitForTdText(name, false, 30);
    });

    this.Then(/^I delete the user "([^"]*)"$/, async function (name) {
        await page.waitForTimeout(10000);
        return pageObjects.manageUsers.deleteUser(name);
    });

    this.Then(/^I can't see user with user name "([^"]*)"$/, async function (name) {
        await page.waitForTimeout(2000);
        assert.isFalse(await helpers.verifyTdTextPresent(name));
        return page.waitForTimeout(100);
    });

    this.Then(/^I fill fields with user name "([^"]*)", email "([^"]*)" and role "([^"]*)"$/, function (user, email, role) {
        return pageObjects.manageUsers.addDataToField(user, email, role);
    });

    this.Then(/^I click on reset button$/, function () {
        return pageObjects.manageUsers.clickOnResetButton();
    });
    
    this.Then(/^I see fields are empty$/, function () {
        return pageObjects.manageUsers.verifyFieldsAreEmpty();
    });


};
