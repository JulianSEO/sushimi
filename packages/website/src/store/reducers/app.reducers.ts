import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";

const appReducer = combineReducers({
  app: createReducer(null),
});

export default appReducer;
