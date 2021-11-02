import { combineReducers } from "@reduxjs/toolkit";

import appReducers from "./app.reducers";
import cartReducers from "./cart.reducers";
import productReducers from "./product.reducers";

const rootReducer = () =>
  combineReducers({
    app: appReducers,
    products: productReducers,
    cart: cartReducers,
  });

export default rootReducer;
