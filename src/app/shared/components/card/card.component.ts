import { Component, Input, OnInit } from '@angular/core';
import { PokemonCard } from '@models/pokemon-card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  pokemonCard: PokemonCard = {} as PokemonCard;

  public value = 0;

  constructor() {}

  ngOnInit(): void {
  }

  addCart(): void {
    console.log('value', this.value);
  }

  reset(): void {
    this.value = 0;
  }
}
