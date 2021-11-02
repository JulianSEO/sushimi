import qs from "query-string";
import { Product } from "@sushimi/interfaces";

import { apiClient } from "config";

export const readProducts = async (): Promise<Product[]> => {
  const { data } = await apiClient.get<Product[]>("/products");
  return data;
};
