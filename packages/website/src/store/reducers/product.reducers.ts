import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

import { Product } from "@sushimi/interfaces";
import { RootAction } from "interfaces";

import { readProducts } from "store/actions";

const productReducers = combineReducers({
  items: createReducer<Product[], RootAction>([]).handleAction(
    [readProducts.success],
    (_, action) => {
      return action.payload;
    }
  ),
});

export default productReducers;
