import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LANG } from '@models/lang.model';
import { ROUTES } from '@models/routes.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { selectShoppingCartTotalAmount, selectShoppingCartTotalItems } from 'app/store/shopping-cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly lang = LANG;
  public readonly ROUTES = ROUTES;
  public readonly totalItems$ = this.store$.select(selectShoppingCartTotalItems);
  public readonly totalAmount$ = this.store$.select(selectShoppingCartTotalAmount);

  constructor(
    private readonly translateService: TranslateService,
    private readonly router: Router,
    private readonly store$: Store
  ) { }

  changeLang(lang: LANG): void {
    this.translateService.use(lang);
    this.translateService.setDefaultLang(lang);
  }

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }
}
