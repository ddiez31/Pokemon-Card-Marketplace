import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import {
  filteredPokemonCards,
  selectPokemonCardsIsLoaded,
  selectPokemonCardsIsLoading,
} from 'app/store/pokemon-card.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  public readonly isLoading$ = this.store$.select(selectPokemonCardsIsLoading);
  public readonly isLoaded$ = this.store$.select(selectPokemonCardsIsLoaded);
  public readonly filteredPokemonCards$ = this.store$.select(filteredPokemonCards);

  constructor(private readonly store$: Store) { }
}
