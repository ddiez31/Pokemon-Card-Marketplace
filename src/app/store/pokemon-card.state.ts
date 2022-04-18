import { PokemonCard } from '@models/pokemon-card.model';

export const pokemonCardsFeatureKey = 'pokemonCards';

export interface PokemonCardState {
  data: PokemonCard[];
  isLoading: boolean;
  isLoaded: boolean;
  error: Error | undefined;
}

export const initialState: PokemonCardState = {
  data: [],
  isLoading: false,
  isLoaded: false,
  error: undefined
};
