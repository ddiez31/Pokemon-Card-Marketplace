import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LANG } from '@models/lang.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly lang = LANG;

  constructor(private readonly translateService: TranslateService, private readonly router: Router) { }

  changeLang(lang: LANG): void {
    this.translateService.use(lang);
    this.translateService.setDefaultLang(lang);
  }

  navigateToCart(): void {
    this.router.navigate(['cart']);
  }
}
