import { createStandardAction } from "typesafe-actions";

export const cartAddItem = createStandardAction("@@cart/add")<string>();
export const cartRemoveItem = createStandardAction("@@cart/remove")<string>();
