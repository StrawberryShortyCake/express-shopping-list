/** Routes for Shopping List app. */

import express from "express";
import { BadRequestError } from "./expressError.js";

import { Item } from "./models.js";

const router = new express.Router();


/** Return list of all shopping items.
 *
 * { items: [
  { name: "popsicle", price: 1.45 },
  { name: "cheerios", price: 3.40 }
]}
*/
router.get("/", function (req, res) {
  return res.json(Item.getAll());
});


/** Accept JSON body, add item to list of items, and return the item.
 *
 * {name: "popsicle", price: 1.45} =>
  {added: {name: "popsicle", price: 1.45}}
*/
router.post("/", function (req, res) {

  const newItem = req.body;

  if (!newItem) {
    throw new BadRequestError("Please enter an item!");
  }

  const addedItem = Item.add(newItem);
  return res.json({ "added": addedItem });

});

router.get("/:name", function (req, res) {
  const itemName = req.params.name; // FIXME: not entirely sure if it's right?
  const itemRetrieved = Item.getOne(itemName);

  return res.json(itemRetrieved);
});

router.patch("/:name", function (req, res) {
  const itemForUpdate = req.body;

  if (!itemForUpdate) {
    throw new BadRequestError("Please update an existing item!");
  }

  const updatedItem = Item.update();

  return res.json({ "updated": updatedItem });
});



export default router;