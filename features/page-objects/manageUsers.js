const { assert } = require("chai");

module.exports = {
    selectors: {
        userNameInput: '[id="userName"]',
        userEmailInput: '[id="userEmail"]',
        userRoleInput: '[id="userRole"]',
        addUserButton: '[type="submit"]',
        editUser: 'tbody>tr:nth-child(1)>td>* .btn.btn-primary',
        editUserNameInput: 'tbody>tr:nth-child(1)>td>* [id="userName"]',
        editUserSubmitButton: 'tbody>tr:nth-child(1)>td>* [type="submit"]',
        deleteUserButton: 'tbody>tr:nth-child(1)>td>* .btn.btn-danger',
        resetButton: '.btn.btn-secondary.ms-md-auto'
    },

    addUser: async function (userName, email, role) {
        await page.waitForTimeout(5000);
        const nameSelector = pageObjects.manageUsers.selectors.userNameInput;
        await page.focus(nameSelector);
        await page.keyboard.type(userName, { delay: 100 });
       
        const emailSelector = pageObjects.manageUsers.selectors.userEmailInput;
        await page.focus(emailSelector);
        await page.keyboard.type(email, { delay: 100 });

        const roleSelector = pageObjects.manageUsers.selectors.userRoleInput;
        await page.focus(roleSelector);
        await page.keyboard.type(role, { delay: 100 });

        const addUserButtonSelector = pageObjects.manageUsers.selectors.addUserButton;
        await page.focus(addUserButtonSelector);
        return page.keyboard.press('Enter');
    },

    editUserWithUserName: async function(userName){
        await page.waitForTimeout(2000);

        const btnEditSelector = pageObjects.manageUsers.selectors.editUser;
        await page.focus(btnEditSelector);
        await page.keyboard.press('Enter');

        const userNameSelector = pageObjects.manageUsers.selectors.editUserNameInput;
        await page.focus(userNameSelector);
        await page.keyboard.down('Control');
        await page.keyboard.press('A');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');
        await page.keyboard.type(userName, {delay:50});

        const btnSelector = pageObjects.manageUsers.selectors.editUserSubmitButton;
        await page.focus(btnSelector);
        return page.keyboard.press('Enter');
    },

    deleteUser: async function(user) {
        const btnEditSelector = pageObjects.manageUsers.selectors.deleteUserButton;
        await page.focus(btnEditSelector);
        return page.keyboard.press('Enter');
    },

    isNameVisible: async (name) => {
        let visible = true;
        await helpers.waitForTdText(name, false, 10)
        .catch(() => {
            visible = false;
        });
        return visible;
    },
    addDataToField: async function (userName, email, role) {
        await page.waitForTimeout(5000);
        const nameSelector = pageObjects.manageUsers.selectors.userNameInput;
        await page.focus(nameSelector);
        await page.keyboard.type(userName, { delay: 100 });
       
        const emailSelector = pageObjects.manageUsers.selectors.userEmailInput;
        await page.focus(emailSelector);
        await page.keyboard.type(email, { delay: 100 });

        const roleSelector = pageObjects.manageUsers.selectors.userRoleInput;
        await page.focus(roleSelector);
        return page.keyboard.type(role, { delay: 100 });
    },
    verifyFieldsAreEmpty: async function(){
        const name = await page.$eval(pageObjects.manageUsers.selectors.userNameInput, (input) => {
            return input.getAttribute("value")
            });
        assert.equal(name,null);
        const email = await page.$eval(pageObjects.manageUsers.selectors.userEmailInput, (input) => {
            return input.getAttribute("value")
            });
        assert.equal(email,null);
        const role = await page.$eval(pageObjects.manageUsers.selectors.userRoleInput, (input) => {
            return input.getAttribute("value")
            });
        assert.equal(role,null);   
    },
    clickOnResetButton: async function(){
        const btnEditSelector = pageObjects.manageUsers.selectors.resetButton;
        await page.focus(btnEditSelector);
        return page.keyboard.press('Enter');
    }
};
