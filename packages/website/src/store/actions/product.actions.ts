import { createAsyncAction } from "typesafe-actions";
import { Product } from "@sushimi/interfaces";

export const readProducts = createAsyncAction(
  "@@products/read/request",
  "@@products/read/success",
  "@@products/read/failure"
)<void, Product[], void>();
