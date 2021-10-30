import { Epic } from "redux-observable";

import type { RootAction } from "./action.interface";
import type { RootState } from "./state.interface";
import type { Services } from "./services.interface";

export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
