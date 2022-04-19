import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { setRaritiesChoice } from 'app/store/pokemon-card.actions';
import { selectRarities } from 'app/store/pokemon-card.selectors';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  public readonly rarities$ = this.store$.select(selectRarities);
  public selectedRarities: string[] = [];

  constructor(private readonly store$: Store) { }

  onSelectionChange(e: MatSelectChange): void {
    const selected = e.value;

    if (this.selectedRarities.length > 0 && this.selectedRarities.includes(selected)) {
      this.selectedRarities = this.selectedRarities.filter(item => item !== selected)
    } else {
      this.selectedRarities = selected;
    }

    this.store$.dispatch(setRaritiesChoice({ selectedRarities: this.selectedRarities }));
  }
}
