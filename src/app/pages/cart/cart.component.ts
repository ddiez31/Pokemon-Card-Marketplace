import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartActions } from '@models/cart-actions.enum';
import { ShoppingCartItem } from '@models/shopping-cart.model';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import {
  resetItemFromShoppingCart,
  resetShoppingCart,
  updateItemFromShoppingCart
} from '@store/shopping-cart/shopping-cart.actions';
import { selectShoppingCart } from '@store/shopping-cart/shopping-cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private _subscription = new Subscription();

  public readonly shoppingCart$ = this.store$.select(selectShoppingCart);
  public total = {
    item: 0,
    amount: 0,
    amountPrice: 0
  }

  public readonly displayedColumns: string[] = ['ref', 'name', 'quantity', 'unit-price', 'total-amount-price', 'action'];
  public readonly cartActions = CartActions;

  constructor(
    private readonly store$: Store,
    private readonly snackBar: MatSnackBar,
    private readonly translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this._subscription.add(
      this.shoppingCart$.subscribe(data => {
        this.total = {
          item: this.getTotal(data.map((item) => item.totalItem)),
          amount: this.getTotal(data.map((item) => item.totalAmount)),
          amountPrice: this.getTotal(data.map((item) => item.totalItem * item.unitPrice))
        }
      })
    );
  }

  updateCart(action: CartActions, item: ShoppingCartItem): void {
    const updateShoppingItem: ShoppingCartItem = {
      id:  item.id,
      ref: item.ref,
      name: item.name,
      unitPrice: item.unitPrice,
      totalItem: item.totalItem,
      totalAmount: item.totalAmount
    };

    switch (action) {
      case CartActions.ADD:
        updateShoppingItem.totalItem = updateShoppingItem.totalItem += 1;
        updateShoppingItem.totalAmount = updateShoppingItem.unitPrice * updateShoppingItem.totalItem;
        this.dispatchUpdate(updateShoppingItem);
        break;
        case CartActions.REMOVE:
        updateShoppingItem.totalItem = updateShoppingItem.totalItem -= 1;
        updateShoppingItem.totalAmount = updateShoppingItem.unitPrice * updateShoppingItem.totalItem;
        this.dispatchUpdate(updateShoppingItem);

        if (updateShoppingItem.totalItem === 0) {
          this.store$.dispatch(resetItemFromShoppingCart({ id: updateShoppingItem.id }));
        } else {
          this.dispatchUpdate(updateShoppingItem);
        }

        break;
      case CartActions.RESET:
        this.store$.dispatch(resetItemFromShoppingCart({ id: item.id }));
        break;
    }
  }

  openSnackBar(): void {
    this._subscription.add(
      this.snackBar.open(this.translateService.instant('cart.thanks'), '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000
      }).afterOpened()
        .pipe(tap(() => this.store$.dispatch(resetShoppingCart())))
        .subscribe()
    );
  }

  ngOnDestroy(): void {
      this._subscription.unsubscribe();
  }

  private getTotal(data: number[]): number {
    return data.reduce((acc, value) => acc + value, 0);
  }

  private dispatchUpdate(value: ShoppingCartItem): void {
    this.store$.dispatch(updateItemFromShoppingCart({
      shoppingCartItem: value
    }));
  }
}
