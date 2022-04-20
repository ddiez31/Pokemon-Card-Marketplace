import { ShoppingCartItem } from '@models/shopping-cart.model';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    LOADING_SHOPPING_CART = '[Shopping Cart] Loading Shopping Cart',
    LOADING_SHOPPING_CART_SUCCESS = '[Shopping Cart] Loading Shopping Cart Success',
    LOADING_SHOPPING_CART_ERROR = '[Shopping Cart] Loading Shopping Cart Error',
    ADD_ITEM_TO_SHOPPING_CART = '[Shopping Cart] Add Item',
    UPDATE_ITEM_FROM_SHOPPING_CART = '[Shopping Cart] Update Item +/-',
    RESET_ITEM_FROM_SHOPPING_CART = '[Shopping Cart] Reset Item',
    RESET_SHOPPING_CART = '[Shopping Cart] Reset All',
}

export const loadingShoppingCart = createAction(
    ActionTypes.LOADING_SHOPPING_CART
);

export const loadingShoppingCartSuccess = createAction(
    ActionTypes.LOADING_SHOPPING_CART_SUCCESS,
    props<{ shoppingCart: ShoppingCartItem[] }>()
);

export const loadingShoppingCartError = createAction(
    ActionTypes.LOADING_SHOPPING_CART_ERROR,
    props<{ error: Error }>()
);

export const addItemToShoppingCart = createAction(
    ActionTypes.ADD_ITEM_TO_SHOPPING_CART,
    props<{ shoppingCartItem: ShoppingCartItem }>()
);

export const updateItemFromShoppingCart = createAction(
    ActionTypes.UPDATE_ITEM_FROM_SHOPPING_CART,
    props<{ shoppingCartItem: ShoppingCartItem }>()
);

export const resetItemFromShoppingCart = createAction(
    ActionTypes.RESET_ITEM_FROM_SHOPPING_CART,
    props<{ id: string }>()
);

export const resetShoppingCart = createAction(
    ActionTypes.RESET_SHOPPING_CART
);
