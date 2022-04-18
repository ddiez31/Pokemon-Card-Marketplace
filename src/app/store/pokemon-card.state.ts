import { PokemonCard } from '@models/pokemon-card.model';

export const pokemonCardsFeatureKey = 'pokemonCards';

export interface PokemonCardState {
  pokemonCards: PokemonCard[];
  isLoading: boolean;
  isLoaded: boolean;
  rarities: string[];
  selectedRarities: string[];
  error: Error | undefined;
}

export const initialState: PokemonCardState = {
  pokemonCards: [],
  isLoading: false,
  isLoaded: false,
  rarities: [],
  selectedRarities: [],
  error: undefined
};
