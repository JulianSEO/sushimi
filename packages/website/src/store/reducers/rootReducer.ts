import { combineReducers } from "@reduxjs/toolkit";

import appReducer from "./app.reducer";
import cartReducer from "./cart.reducer";

export default combineReducers({
  app: appReducer,
  cart: cartReducer,
});
