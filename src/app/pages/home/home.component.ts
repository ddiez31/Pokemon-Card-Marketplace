import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { selectPokemonCards, selectPokemonCardsIsLoaded, selectPokemonCardsIsLoading } from 'app/store/pokemon-card.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  isLoading$ = this.store$.select(selectPokemonCardsIsLoading);
  isLoaded$ = this.store$.select(selectPokemonCardsIsLoaded);
  pokemonCards$ = this.store$.select(selectPokemonCards);

  constructor(private readonly store$: Store) { }

  ngOnInit(): void {
  }
}
