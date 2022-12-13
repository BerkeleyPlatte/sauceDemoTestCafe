import InventoryPage from '../pages/InventoryPage';
import LoginPage from '../pages/LoginPage';

fixture `InventoryPage`
    .page("https://www.saucedemo.com/inventory.html")
    .beforeEach(async () => {
        await LoginPage.loginUser('standard_user');
    });

const pictureOjb = {
    "Sauce Labs Backpack": "https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg",
    "Sauce Labs Bike Light": "https://www.saucedemo.com/static/media/bike-light-1200x1500.a0c9caae.jpg",
    "Sauce Labs Bolt T-Shirt": "https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c0dae290.jpg",
    "Sauce Labs Fleece Jacket": "https://www.saucedemo.com/static/media/sauce-pullover-1200x1500.439fc934.jpg",
    "Sauce Labs Onesie": "https://www.saucedemo.com/static/media/red-onesie-1200x1500.1b15e1fa.jpg",
    "Test.allTheThings() T-Shirt (Red)": "https://www.saucedemo.com/static/media/red-tatt-1200x1500.e32b4ef9.jpg"
}

// test("Add all items to cart", async () => {
//     let numberOfAllItems = await InventoryPage.addToCartButtonList.count;
//     await InventoryPage.addMultipleItems(numberOfAllItems);
// });

// test("Logout from inventory page", async () => {
//     await InventoryPage.logout();
// });

// test("Display items a to z", async () => {
//     await InventoryPage.sortItems('Name (A to Z)', 'Backpack')
// });

// test("Display items z to a", async () => {
//     await InventoryPage.sortItems('Name (Z to A)', 'Red')
// });

// test("Display items by price asc", async () => {
//     await InventoryPage.sortItems('Price (low to high)', 'Onesie')
// });

// test("Display items by price desc", async () => {
//     await InventoryPage.sortItems('Price (high to low)', 'Fleece')
// });

test("Check item picture", async () => {
    await InventoryPage.checkItemPicture()
})
