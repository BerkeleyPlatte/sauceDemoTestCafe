import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

fixture `Login Page`
    .page("https://www.saucedemo.com");

const usernames = [
    "standard_user",
    "locked_out_user",
    "problem_user",
    "performance_glitch_user",
]


test("Login with correct credentials", async t => {
    await t
        .typeText(LoginPage.usernameInput, "standard_user")
        .typeText(LoginPage.passwordInput, "secret_sauce")
        .click(LoginPage.loginButton)
        .expect(InventoryPage.inventoryList.visible).ok("Invetory item list is displayed");
});


usernames.forEach((username) => {
    test("Login with incorrect credentials", async t => {
        await t
            .typeText(LoginPage.usernameInput, username)
            .typeText(LoginPage.passwordInput, "not_secret_sauce")
            .click(LoginPage.loginButton)
            .expect(LoginPage.errorMessage.innerText).contains("Epic sadface")
    });
});


usernames.forEach((username) => {
    test("Login with no password", async t => {
        await t
            .typeText(LoginPage.usernameInput, username)
            .click(LoginPage.loginButton)
            .expect(LoginPage.errorMessage.innerText).contains("Epic sadface")
    });
});