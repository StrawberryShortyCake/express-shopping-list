// TODO: what kind of errors should we neeeed?
import { items } from "./fakeDb.js";
import { NotFoundError } from "./expressError.js";

class Item {

  static item = {};
  static cartItems = items;

  /** return a list of items from the fakeDb */
  static getAll() {
    return this.cartItems;
  }

  /** given item name, get the item from the fakeDb */
  static getOne(name) {

    const itemFound = this.cartItems.filter((cartItem) => {
      return cartItem.name === name;
    });

    if (itemFound.length > 0) {
      return itemFound;
    }

    throw new NotFoundError(`No item ${name}`);
  }

  /**  given item object, add an item to the fakeDb */
  static add(item) {
    Item.item["name"] = item.name; // TODO: refactor?
    Item.item["price"] = item.price;
    this.cartItems.push(item);
    return item;
  }

  /**  given item object, delete the item from the fakeDb */
  static delete(itemData) {

    const item = Item.getOne(item.name); // will throw error if no item found

    for (i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].name === itemData.name) {
        this.cartItems.splice(i, 1);
      }
    }
    return true;
  }

  static update(item) {

    const currentItem = Item.getOne(item.name);

    const newName = item.name;
    const newPrice = item.price;

    currentItem["name"] = newName || currentItem["name"];
    currentItem["price"] = newPrice || currentItem["price"];

    return currentItem; //TODO: check if returning new item
  }
}

export { Item };
