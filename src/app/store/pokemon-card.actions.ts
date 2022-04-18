import { PokemonCard } from '@models/pokemon-card.model';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    LOADING_POKEMON_CARDS = '[Card List] Loading Pokemon Cards',
    LOADING_POKEMON_CARDS_SUCCESS = '[Card List] Loading Pokemon Cards Success',
    LOADING_POKEMON_CARDS_ERROR = '[Card List] Loading Pokemon Cards Error',
  }

export const loadingPokemonCards = createAction(
    ActionTypes.LOADING_POKEMON_CARDS
);

export const loadingPokemonCardsSuccess = createAction(
    ActionTypes.LOADING_POKEMON_CARDS_SUCCESS,
    props<{ data: PokemonCard[] }>()
);

export const loadingPokemonCardsError = createAction(
    ActionTypes.LOADING_POKEMON_CARDS_ERROR,
    props<{ error: Error }>()
);
