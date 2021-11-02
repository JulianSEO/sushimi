import qs from "query-string";
import { Product } from "@sushimi/interfaces";

import { apiClient } from "config";

export const readProducts = async (): Promise<Product[]> => {
  console.log("Product API");
  // return await apiClient.get('');
  return new Promise((resolve, reject) => {
    resolve([]);
  });
};
