import {Selector} from 'testcafe';

class ProductPage{
    constructor() {
        this.inventoryList = Selector(".inventory_list");
        this.passwordInput = Selector("#password");
        this.loginButton = Selector("#login-button");
    }
}

class InventoryItem{
        constructor(itemName) {
            this.item = Selector(".inventory_item_name").withText(itemName).parent(".inventory_item")
            this.itemButton = this.item.find(".btn_inventory")
            this.itemName = this.item.find(".inventory_item_name")
        }
}

export default ProductPage = new ProductPage();
export function inventoryItem(item){return new InventoryItem(item)}