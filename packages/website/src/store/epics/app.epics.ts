import { from, of } from "rxjs";
import { filter, mergeMap, catchError, tap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";

import { RootEpic } from "interfaces";
import { AppInit, readProducts } from "store/actions";

const appInitEpic: RootEpic = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(AppInit.request)),

    mergeMap(() => {
      return from([readProducts.request(), AppInit.success()]);
    }),
    catchError((e) => {
      console.error(e);
      return of(AppInit.failure());
    })
  );
};

export default [appInitEpic];
