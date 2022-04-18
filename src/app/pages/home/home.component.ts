import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSelectionListChange } from '@angular/material/list';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { setRaritiesChoice } from 'app/store/pokemon-card.actions';
import {
  filteredPokemonCards,
  selectPokemonCardsIsLoaded,
  selectPokemonCardsIsLoading,
  selectRarities
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

  isLoading$ = this.store$.select(selectPokemonCardsIsLoading);
  isLoaded$ = this.store$.select(selectPokemonCardsIsLoaded);
  filteredPokemonCards$ = this.store$.select(filteredPokemonCards);
  rarities$ = this.store$.select(selectRarities);

  selectedRarities: string[] = [];

  constructor(private readonly store$: Store) { }

  onListSelectionChange(e: MatSelectionListChange): void {
    const selected = e.options[0];

    if (this.selectedRarities.length > 0 && this.selectedRarities.includes(selected.value)) {
      this.selectedRarities = this.selectedRarities.filter(item => item !== selected.value)
    } else {
      this.selectedRarities = [...this.selectedRarities, selected.value];
    }

    this.store$.dispatch(setRaritiesChoice({ selectedRarities: this.selectedRarities }));
  }
}
