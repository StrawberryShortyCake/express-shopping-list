/** Routes for Shopping List app. */

import express from "express";

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

  // access JSON body

  // add item to items list

  // return the item
});

export default router;