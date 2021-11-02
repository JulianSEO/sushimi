import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

import { RootAction, RootState, Services } from "interfaces";
import services from "services";

import { AppInit } from "./actions";

import rootEpic from "./epics";
import rootReducer from "./reducers";

const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({ dependencies: services });

export const store = configureStore({
  reducer: rootReducer(),
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

store.dispatch(AppInit.request());
