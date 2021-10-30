import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "./app.reducer";
import cartReducer from "./cart.reducer";

export const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
});

export default rootReducer;
