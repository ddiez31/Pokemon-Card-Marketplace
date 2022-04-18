import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pokemonCardsFeatureKey, PokemonCardState } from './pokemon-card.state';

export const selectPokemonCardState = createFeatureSelector<PokemonCardState>(pokemonCardsFeatureKey);

export const selectPokemonCards = createSelector(
    selectPokemonCardState,
    (state: PokemonCardState) => state.data
);

export const selectPokemonCardsIsLoading = createSelector(
    selectPokemonCardState,
    (state: PokemonCardState) => state.isLoading
);

export const selectPokemonCardsIsLoaded = createSelector(
    selectPokemonCardState,
    (state: PokemonCardState) => state.isLoaded
);
