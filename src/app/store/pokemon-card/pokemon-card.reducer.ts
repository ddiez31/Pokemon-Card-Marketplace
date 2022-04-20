import { Action, createReducer, on } from '@ngrx/store';
import {
    loadingPokemonCards,
    loadingPokemonCardsError,
    loadingPokemonCardsSuccess,
    loadingRarities,
    loadingRaritiesError,
    loadingRaritiesSuccess,
    setRaritiesChoice
} from './pokemon-card.actions';
import { initialState, PokemonCardState } from './pokemon-card.state';

export const pokemonCardsReducer = createReducer<PokemonCardState>(
    initialState,
    on(loadingPokemonCards, (state) => ({
        ...state,
        isLoading: true
    })),
    on(loadingPokemonCardsSuccess, (state, { pokemonCards }) => ({
        ...state,
        pokemonCards,
        isLoading: false,
        isLoaded: true
    })),
    on(loadingPokemonCardsError, (state, { error }) => ({
        ...state,
        error
    })),
    on(loadingRarities, (state) => ({
        ...state
    })),
    on(loadingRaritiesSuccess, (state, { rarities }) => ({
        ...state,
        rarities
    })),
    on(loadingRaritiesError, (state, { error }) => ({
        ...state,
        error
    })),
    on(setRaritiesChoice, (state, { selectedRarities }) => ({
        ...state,
        selectedRarities
    })),
);

export function reducer(state: PokemonCardState | undefined, action: Action): PokemonCardState {
    return pokemonCardsReducer(state, action);
}
