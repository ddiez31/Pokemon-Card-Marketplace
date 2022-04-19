import { Component, Input } from '@angular/core';
import { PokemonCard } from '@models/pokemon-card.model';
import { ShoppingCartItem } from '@models/shopping-cart.model';
import { Store } from '@ngrx/store';
import { addItemToShoppingCart } from 'app/store/shopping-cart.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  pokemonCard: PokemonCard = {} as PokemonCard;

  public value = 0;

  constructor(private readonly store$: Store) {}

  addItemToCart(pokemonCard: PokemonCard): void {
    const newShoppingItem: ShoppingCartItem = {
      id: uuid(),
      ref: pokemonCard.id,
      name: pokemonCard.name,
      unitPrice: pokemonCard.cardmarket.prices.trendPrice,
      totalItem: this.value,
      totalAmount: pokemonCard.cardmarket.prices.trendPrice * this.value
    };

    this.store$.dispatch(addItemToShoppingCart({
      shoppingCartItem: newShoppingItem
    }));
    this.value = 0;
  }

  resetValue(): void {
    this.value = 0;
  }
}
