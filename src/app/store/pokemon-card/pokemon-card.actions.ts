import { PokemonCard } from '@models/pokemon-card.model';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    LOADING_POKEMON_CARDS = '[Card List] Loading Pokemon Cards',
    LOADING_POKEMON_CARDS_SUCCESS = '[Card List] Loading Pokemon Cards Success',
    LOADING_POKEMON_CARDS_ERROR = '[Card List] Loading Pokemon Cards Error',
    LOADING_RARITIES = '[Rarity List] Loading Rarities',
    LOADING_RARITIES_SUCCESS = '[Rarity List] Loading Rarities Success',
    LOADING_RARITIES_ERROR = '[Rarity List] Loading Rarities Error',
    SET_RARITIES_CHOICE = '[Rarity Choice] Set Rarities Choice',
}

export const loadingPokemonCards = createAction(
    ActionTypes.LOADING_POKEMON_CARDS
);

export const loadingPokemonCardsSuccess = createAction(
    ActionTypes.LOADING_POKEMON_CARDS_SUCCESS,
    props<{ pokemonCards: PokemonCard[] }>()
);

export const loadingPokemonCardsError = createAction(
    ActionTypes.LOADING_POKEMON_CARDS_ERROR,
    props<{ error: Error }>()
);

export const loadingRarities = createAction(
    ActionTypes.LOADING_RARITIES
);

export const loadingRaritiesSuccess = createAction(
    ActionTypes.LOADING_RARITIES_SUCCESS,
    props<{ rarities: string[] }>()
);

export const loadingRaritiesError = createAction(
    ActionTypes.LOADING_RARITIES_ERROR,
    props<{ error: Error }>()
);

export const setRaritiesChoice = createAction(
    ActionTypes.SET_RARITIES_CHOICE,
    props<{ selectedRarities: string[] }>()
);
