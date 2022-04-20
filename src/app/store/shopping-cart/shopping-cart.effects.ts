import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
    loadingShoppingCart,
    loadingShoppingCartSuccess,
    loadingShoppingCartError
} from './shopping-cart.actions';
import { selectShoppingCart } from './shopping-cart.selectors';

@Injectable()
export class ShoppingCartEffects {
    loadingShoppingCart$ = createEffect(() => this.actions$.pipe(
        ofType(loadingShoppingCart),
        mergeMap(() => this.store$.select(selectShoppingCart).pipe(
                map(shoppingCart => loadingShoppingCartSuccess({ shoppingCart })),
                catchError((error) => of(loadingShoppingCartError({ error }))),
            )
        )
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly store$: Store
    ) {}
}
