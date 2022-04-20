import { ShoppingCartItem } from '@models/shopping-cart.model';

export const shoppingCartFeatureKey = 'shoppingCart';

export interface ShoppingCartState {
  shoppingCart: ShoppingCartItem[];
}

export const initialShoppingCartState: ShoppingCartState = {
  shoppingCart: []
};
