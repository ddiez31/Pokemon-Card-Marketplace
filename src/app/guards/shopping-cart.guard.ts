import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'app/store';
import { loadingShoppingCart } from 'app/store/shopping-cart.actions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartGuard implements CanActivate {
  constructor(private readonly store$: Store<State>) {}

  canActivate(): Observable<boolean> {
    this.store$.dispatch(loadingShoppingCart());
    return of(true);
  }
}
