import InventoryPage from '../pages/InventoryPage';
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';

fixture `Verify the Shopping Cart functionality:`
    .page `https://www.saucedemo.com/cart.html`
    .beforeEach(async t => {
        await LoginPage.loginUser('performance_glitch_user');
        t.ctx.numberOfAllItems = await InventoryPage.addToCartButtonList.count;
        await InventoryPage.addMultipleItems(t.ctx.numberOfAllItems);
    });

test('Remove all items from shopping cart', async t => {
    await CartPage.removeMultipleItems(t.ctx.numberOfAllItems);
});

test('Return to inventory', async t => {
    await CartPage.returnToInventory()
});