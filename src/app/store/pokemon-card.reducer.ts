import { Action, createReducer, on } from '@ngrx/store';
import { loadingPokemonCards, loadingPokemonCardsError, loadingPokemonCardsSuccess } from './pokemon-card.actions';
import { initialState, PokemonCardState } from './pokemon-card.state';

export const pokemonCardsReducer = createReducer<PokemonCardState>(
  initialState,
  on(loadingPokemonCards, (state) => ({
        ...state,
        isLoading: true
    })),
  on(loadingPokemonCardsSuccess, (state, { data }) => ({
        ...state,
        data,
        isLoading: false,
        isLoaded: true
    })),
  on(loadingPokemonCardsError, (state, { error }) => ({
        ...state,
        error
    }))
);

export function reducer(state: PokemonCardState | undefined, action: Action): PokemonCardState {
    return pokemonCardsReducer(state, action);
}
