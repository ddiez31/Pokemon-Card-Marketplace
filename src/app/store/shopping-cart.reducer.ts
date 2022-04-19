import { Action, createReducer, on } from '@ngrx/store';
import {
    loadingShoppingCart,
    loadingShoppingCartSuccess,
    loadingShoppingCartError,
    addItemToShoppingCart,
    updateItemFromShoppingCart,
    resetItemFromShoppingCart
} from './shopping-cart.actions';
import { initialShoppingCartState, ShoppingCartState } from './shopping-cart.state';

export const shoppingCartReducer = createReducer<ShoppingCartState>(
    initialShoppingCartState,
    on(loadingShoppingCart, (state) => ({
        ...state
    })),
    on(loadingShoppingCartSuccess, (state, { shoppingCart }) => ({
        ...state,
        shoppingCart
    })),
    on(loadingShoppingCartError, (state, { error }) => ({
        ...state,
        error
    })),
    on(addItemToShoppingCart, (state, { shoppingCartItem }) => ({
        ...state,
        shoppingCart: [...state.shoppingCart, shoppingCartItem]
    })),
    on(updateItemFromShoppingCart, (state, { shoppingCartItem }) => ({
        ...state,
        shoppingCart: state.shoppingCart
            .map(item => ({...item}))
            .map(item => {
                if (item.id === shoppingCartItem.id) {
                    return {
                        ...shoppingCartItem
                    }
                }  else {
                    return item;
                }
            })

    })),
    on(resetItemFromShoppingCart, (state, { id }) => ({
        ...state,
        shoppingCart: state.shoppingCart.filter(item => item.id !== id)
    }))
);

export function reducer(state: ShoppingCartState | undefined, action: Action): ShoppingCartState {
    return shoppingCartReducer(state, action);
}
