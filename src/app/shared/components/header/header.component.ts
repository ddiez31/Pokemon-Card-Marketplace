import { Component } from '@angular/core';
import { LANG } from '@models/lang.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly lang = LANG;

  constructor(private readonly translateService: TranslateService) { }

  changeLang(lang: LANG): void {
    this.translateService.use(lang);
  }
}
