import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { RootAction, CartItem } from "interfaces";

import { addToCart } from "store/actions";

const cartReducers = combineReducers({
  items: createReducer<CartItem[], RootAction>([]).handleAction(
    [addToCart],
    (state, action) => {
      return [...state, action.payload];
    }
  ),
});

export default cartReducers;
