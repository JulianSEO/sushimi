import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { Item } from "@sushimi/interfaces";
import { RootAction } from "interfaces";

import { cartAddItem } from "store/actions/cart.actions";

const cartReducer = combineReducers({
  items: createReducer<Item[], RootAction>([]).handleAction(
    [cartAddItem],
    (state, action) => {
      return [...state, { description: "", price: 0, title: "" }];
    }
  ),
  totalPrice: createReducer(0),
});
export default cartReducer;
