import { createAsyncAction } from "typesafe-actions";

export const AppInit = createAsyncAction(
  "@@app/init/request",
  "@@app/init/success",
  "@@app/init/failure"
)<void, void, void>();
