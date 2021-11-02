import { createStandardAction } from "typesafe-actions";

import { CartItem } from "interfaces";

export const addToCart = createStandardAction("@@cart/item/add")<CartItem>();
