import { Epic } from "redux-observable";
import { StateType, ActionType } from "typesafe-actions";

export type Services = typeof import("services").default;
export type RootAction = ActionType<typeof import("store/actions")>;
export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
export type RootState = StateType<
  ReturnType<typeof import("store/reducers").default>
>;
