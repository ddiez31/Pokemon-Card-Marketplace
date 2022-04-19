import { ShoppingCartItem } from '@models/shopping-cart.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { shoppingCartFeatureKey, ShoppingCartState } from './shopping-cart.state';

export const selectShoppingCartState = createFeatureSelector<ShoppingCartState>(shoppingCartFeatureKey);

export const selectShoppingCart = createSelector(
    selectShoppingCartState,
    (state: ShoppingCartState) => state.shoppingCart
);

export const selectShoppingCartTotalItems = createSelector(
    selectShoppingCart,
    (shoppingCart: ShoppingCartItem[]) => shoppingCart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.totalItem,
        0
    )
);

export const selectShoppingCartTotalAmount = createSelector(
    selectShoppingCart,
    (shoppingCart: ShoppingCartItem[]) => shoppingCart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.totalAmount,
        0
    )
);
