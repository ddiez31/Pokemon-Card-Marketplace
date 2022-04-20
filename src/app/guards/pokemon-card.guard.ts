import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadingPokemonCards, loadingRarities } from '@store/pokemon-card/pokemon-card.actions';
import { State } from 'app/store';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardGuard implements CanActivate {
  constructor(private readonly store$: Store<State>) {}

  canActivate(): Observable<boolean> {
      this.store$.dispatch(loadingPokemonCards());
      this.store$.dispatch(loadingRarities());
      return of(true);
  }
}
