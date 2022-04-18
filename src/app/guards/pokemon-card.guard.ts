import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { PokemonCard } from '@models/pokemon-card.model';
import { Store } from '@ngrx/store';
import { State } from 'app/store';
import { loadingPokemonCards, loadingRarities } from 'app/store/pokemon-card.actions';
import { selectPokemonCards } from 'app/store/pokemon-card.selectors';
import { map, Observable, skipWhile, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardGuard implements CanActivate {
  constructor(private readonly store$: Store<State>) {}

  canActivate(): Observable<boolean> {
    return this.store$.select(selectPokemonCards).pipe(
      skipWhile((pokemonCards: PokemonCard[]) => pokemonCards === null),
      map((pokemonCards: PokemonCard[]) => {
        if (pokemonCards?.length === 0) {
          this.store$.dispatch(loadingPokemonCards());
          this.store$.dispatch(loadingRarities());
          return true;
        }

        return false;
      }),
      take(1)
    );
  }
}
