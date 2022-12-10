import {Selector, t } from 'testcafe';

class LoginPage{
    constructor() {
        this.usernameInput = Selector("#user-name");
        this.passwordInput = Selector("#password");
        this.loginButton = Selector("#login-button");
        this.errorMessage = Selector("[data-test='error']");
    }

    async loginUser(username="standard_user", password="secret_sauce") {
        await t
            .typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)
            .click(this.loginButton)
    }
}

export default new LoginPage();