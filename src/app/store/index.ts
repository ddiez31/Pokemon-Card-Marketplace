import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storageSync } from '@larscom/ngrx-store-storagesync';
import * as fromPokemonCard from './pokemon-card/pokemon-card.state';
import * as fromPokemonCardReducer from './pokemon-card/pokemon-card.reducer';
import * as fromShoppingCart from './shopping-cart/shopping-cart.state';
import * as fromShoppingCartReducer from './shopping-cart/shopping-cart.reducer';
import { InjectionToken } from '@angular/core';
export interface State {
  [fromPokemonCard.pokemonCardsFeatureKey]: fromPokemonCard.PokemonCardState;
  [fromShoppingCart.shoppingCartFeatureKey]: fromShoppingCart.ShoppingCartState;
}

export const reducers: ActionReducerMap<State> = {
  [fromPokemonCard.pokemonCardsFeatureKey]: fromPokemonCardReducer.reducer,
  [fromShoppingCart.shoppingCartFeatureKey]: fromShoppingCartReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = [storageSyncReducer];

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('App Reducers');

export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };

export function storageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  const metaReducer = storageSync<State>({
    features: [
      { stateKey: fromShoppingCart.shoppingCartFeatureKey, storageForFeature: window.localStorage }
    ],
    storage: window.localStorage
  });

  return metaReducer(reducer);
}
