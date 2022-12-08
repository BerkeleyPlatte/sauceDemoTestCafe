import {Selector} from 'testcafe';

class LoginPage{
    constructor() {
        this.usernameInput = Selector("#user-name");
        this.passwordInput = Selector("#password");
        this.loginButton = Selector("#login-button");
        //data-test="error"
        this.errorMessage = Selector("[data-test='error']");
        // this.loginUsernames = [for (i of Selector("#login-credentials").withText("_user")) if i];
    }

    async loginUser(username="standard_user", password="secret_sauce") {
        await t
            .typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)
            .click(this.loginButton)
    }
}

export default LoginPage = new LoginPage();