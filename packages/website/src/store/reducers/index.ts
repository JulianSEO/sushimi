import { combineReducers } from "@reduxjs/toolkit";

import appReducers from "./app.reducers";

export const rootReducer = combineReducers({
  app: appReducers,
});

export default rootReducer;
