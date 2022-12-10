import InventoryPage from '../pages/InventoryPage';
import LoginPage from '../pages/LoginPage';

fixture `Verify the InventoryPage page functionality and capabilities:`
    .page("https://www.saucedemo.com/inventory.html")
    .beforeEach(async () => {
        await LoginPage.loginUser();
    });

test("Logout from inventory page", async () => {
    await InventoryPage.logout();
});

test("Add all displayed items to the shopping cart", async () => {
    let numberOfAllItems = await InventoryPage.addToCartButtonList.count;
    await InventoryPage.addMultipleItems(numberOfAllItems);
});