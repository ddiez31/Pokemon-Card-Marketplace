import { Component, OnInit } from '@angular/core';
import { PokemonCardService } from 'app/shared/services/pokemon-card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public value = 0;

  constructor(private readonly pokemonCardService: PokemonCardService) { }

  ngOnInit(): void {
    this.pokemonCardService.getCardList().subscribe(
      data => console.log(data)
    )
  }

  addCart(): void {
    console.log('value', this.value);
  }

  reset(): void {
    this.value = 0;
  }
}
