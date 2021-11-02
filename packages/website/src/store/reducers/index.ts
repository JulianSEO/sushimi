import { combineReducers } from "@reduxjs/toolkit";

import appReducers from "./app.reducers";
import productReducers from "./product.reducers";

const rootReducer = () =>
  combineReducers({
    app: appReducers,
    products: productReducers,
  });

export default rootReducer;
