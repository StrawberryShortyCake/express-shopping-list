// TODO: what kind of errors should we neeeed?
import { items } from "./fakeDb";
import { NotFoundError } from "./expressError";

class Item {

  static item = {};
  static cartItems = items;

  /** return a list of items from the fakeDb */
  static getAll() {
    return cartItems;
  }

  /** given item name, get the item from the fakeDb */
  static getOne(name) {

    const itemFound = cartItems.filter((cartItem) => {
      return cartItem.name === name;
    });

    if (itemFound) {
      return itemFound;
    }

    throw new NotFoundError(`No item ${name}`);
  }

  /**  given item object, add an item to the fakeDb */
  static add(item) {
    Item.item["name"] = item.name; // TODO: refactor?
    Item.item["price"] = item.price;
    cartItems.push(item);
    return item;
  }

  /**  given item object, delete the item from the fakeDb */
  static delete(item) {
    for (i = 0; i < this.cartItems.length; i++) {
      if (cartItems[i].name === item.name) {
        cartItems.splice(i, 1);
      }
    }
    return true;
  }

  static update(item) {

    const currentItem = getOne(item.name);

    const newName = item.name;
    const newPrice = item.price;

    currentItem["name"] = newName || currentItem["name"];
    currentItem["price"] = newPrice || currentItem["price"];

    return currentItem; //TODO: check if returning new item
  }
}
