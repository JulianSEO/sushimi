import { combineEpics } from "redux-observable";

import appEpics from "./app.epics";
import productEpics from "./product.epics";

export default combineEpics(...appEpics, ...productEpics);
