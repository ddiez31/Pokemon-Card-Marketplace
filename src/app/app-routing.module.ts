import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardGuard } from './guards/pokemon-card.guard';
import { ShoppingCartGuard } from './guards/shopping-cart.guard';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [PokemonCardGuard, ShoppingCartGuard] },
  { path: 'cart', component: CartComponent, data: {title: 'titles.cart'}, canActivate: [ShoppingCartGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
