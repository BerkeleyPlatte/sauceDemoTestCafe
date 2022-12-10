import { Selector, t } from 'testcafe';
import CartPage from './CartPage';
import LoginPage from './LoginPage';

class InventoryPage {
    constructor() {
        this.inventoryList = Selector(".inventory_list");
        this.inventoryTitle = Selector('.title').withText(/Products/i);
        this.menuButton = Selector('#react-burger-menu-btn');
        this.logoutSidebarLink = Selector('#logout_sidebar_link');
        this.shoppingCartLink = Selector('.shopping_cart_link');
        this.cartCounterIcon = Selector('.shopping_cart_badge');
        this.itemNameList = Selector('.inventory_item_name');
        this.itemPriceList = Selector('.inventory_item_price');
        this.addToCartButtonList = Selector('div.pricebar button');
        this.cartCounter = 0;
    }

    async logout() {
        await t
            .click(this.menuButton)
            .click(this.logoutSidebarLink)
            .expect(LoginPage.loginButton.exists).ok();
    }

    async navigateToShoppingCart() {
        await t
            .click(this.shoppingCartLink)
            .expect(CartPage.yourCartTitle.exists).ok();
    }

    async addItem(index) {
        let itemName = await this.itemNameList.nth(index).innerText;
        let itemPrice = await this.itemPriceList.nth(index).innerText;
        await t.click(this.addToCartButtonList.nth(index));
        this.cartCounter++;
        await t.expect(this.cartCounterIcon.innerText).eql(this.cartCounter.toString());
        await this.navigateToShoppingCart();
        await t
            .expect(CartPage.itemNameList.withText(itemName).exists).ok()
            .expect(CartPage.itemPriceList.withText(itemPrice).exists).ok()
            .click(CartPage.continueShoppingButton);
    }

    async addMultipleItems(numberOfItems) {
        this.cartCounter = 0;
        for (let i = 0; i < numberOfItems; i++) {
            await this.addItem(i);
        }
        this.cartCounter = 0;
        await this.navigateToShoppingCart();
    }
}

export default new InventoryPage();