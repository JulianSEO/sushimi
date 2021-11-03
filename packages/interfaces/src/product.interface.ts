import { Store } from "store.interface";

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  weight: number;
  quantity: number;
  calories: number;

  availability: Array<Pick<Store, "_id">>;
}
