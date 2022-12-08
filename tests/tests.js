import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";

fixture `Login Page`
    .page("https://www.saucedemo.com/");

const usernames = [
    "standard_user",
    "locked_out_user",
    "problem_user",
    "performance_glitch_user",
]

const wrongPasswords = [
    "password",
    "",
]

// test("Login with correct credentials", async t => {
//     await t
//         .typeText(LoginPage.usernameInput, "standard_user")
//         .typeText(LoginPage.passwordInput, "secret_sauce")
//         .click(LoginPage.loginButton)
//         .expect(ProductPage.inventoryList.visible).ok("Invetory item list is displayed");
// });

wrongPasswords.forEach((password) => {
    usernames.forEach((username) => {
        test("Login with incorrect credentials", async t => {
            await t
                .typeText(LoginPage.usernameInput, username)
                .typeText(LoginPage.passwordInput, password)
                .click(LoginPage.loginButton)
                .expect(LoginPage.errorMessage.innerText).contains("Epic sadface")
        });
    });
});
// usernames.forEach((username) => {
//     test("Login with incorrect credentials", async t => {
//         await t
//             .typeText(LoginPage.usernameInput, username)
//             .typeText(LoginPage.passwordInput, "password")
//             .click(LoginPage.loginButton)
//             .expect(LoginPage.errorMessage.innerText).contains("Epic sadface")
//     });
// });