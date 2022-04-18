import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPokemonCard from './pokemon-card.state';
import * as fromPokemonCardReducer from './pokemon-card.reducer';
import { InjectionToken } from '@angular/core';
export interface State {
  [fromPokemonCard.pokemonCardsFeatureKey]: fromPokemonCard.PokemonCardState;
}

export const reducers: ActionReducerMap<State> = {
  [fromPokemonCard.pokemonCardsFeatureKey]: fromPokemonCardReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<State>>('App Reducers');

export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: reducers };
