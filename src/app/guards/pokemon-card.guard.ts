import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'app/store';
import { loadingPokemonCards, loadingRarities } from 'app/store/pokemon-card.actions';
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
