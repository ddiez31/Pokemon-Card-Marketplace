import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonCardService } from 'app/shared/services/pokemon-card.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import { loadingPokemonCards, loadingPokemonCardsError, loadingPokemonCardsSuccess } from './pokemon-card.actions';


@Injectable()
export class PokemonCardsEffects {
    loadingPokemonCards$ = createEffect(() => this.actions$.pipe(
        ofType(loadingPokemonCards),
        mergeMap(() => this.pokemonCardService.getCardList().pipe(
                map(pokemonCards => loadingPokemonCardsSuccess({ data: pokemonCards })),
                catchError((error) => of(loadingPokemonCardsError({ error }))),
            )
        )
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly pokemonCardService: PokemonCardService
    ) {}
}
