import { PokemonCard } from '@models/pokemon-card.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pokemonCardsFeatureKey, PokemonCardState } from './pokemon-card.state';

export const selectPokemonCardState = createFeatureSelector<PokemonCardState>(pokemonCardsFeatureKey);

export const selectPokemonCards = createSelector(
    selectPokemonCardState,
    (state: PokemonCardState) => state.pokemonCards
);

export const selectPokemonCardsIsLoading = createSelector(
    selectPokemonCardState,
    (state: PokemonCardState) => state.isLoading
);

export const selectPokemonCardsIsLoaded = createSelector(
    selectPokemonCardState,
    (state: PokemonCardState) => state.isLoaded
);

export const selectRarities = createSelector(
    selectPokemonCardState,
    (state: PokemonCardState) => state.rarities
);

export const filteredPokemonCards = createSelector(
    selectPokemonCardState,
    selectPokemonCards,
    (state: PokemonCardState, pokemonCards: PokemonCard[]) => {
      if (state.selectedRarities?.length > 0) {
            return pokemonCards.filter(pokemonCard =>
                state.selectedRarities.indexOf(pokemonCard.rarity) !== -1
             )
      } else {
        return pokemonCards;
      }
    }
  );
