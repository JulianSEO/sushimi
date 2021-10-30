import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

const cartReducer = combineReducers({
  items: createReducer([]),
  totalPrice: createReducer(0),
});
export default cartReducer;
