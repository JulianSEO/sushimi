import { createAsyncAction } from "typesafe-actions";
import { Product } from "interfaces";

export const readProducts = createAsyncAction(
  "@@products/read/request",
  "@@products/read/success",
  "@@products/read/failure"
)<void, Product[], void>();
