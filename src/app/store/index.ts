import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPokemonCard from './pokemon-card.state';
import * as fromPokemonCardReducer from './pokemon-card.reducer';
import * as fromShoppingCart from './shopping-cart.state';
import * as fromShoppingCartReducer from './shopping-cart.reducer';
import { InjectionToken } from '@angular/core';
export interface State {
  [fromPokemonCard.pokemonCardsFeatureKey]: fromPokemonCard.PokemonCardState;
  [fromShoppingCart.shoppingCartFeatureKey]: fromShoppingCart.ShoppingCartState;
}

export const reducers: ActionReducerMap<State> = {
  [fromPokemonCard.pokemonCardsFeatureKey]: fromPokemonCardReducer.reducer,
  [fromShoppingCart.shoppingCartFeatureKey]: fromShoppingCartReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('App Reducers');

export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };
