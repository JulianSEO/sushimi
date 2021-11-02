import { from, of } from "rxjs";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";

import { RootEpic } from "interfaces";
import { readProducts } from "store/actions";

const readProductsEpic: RootEpic = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(readProducts.request)),
    switchMap(({ payload }) =>
      from(api.product.readProducts()).pipe(
        map((products) => {
          return readProducts.success(products);
        }),
        catchError((e) => {
          return of(readProducts.failure());
        })
      )
    )
  );
};

export default [readProductsEpic];
