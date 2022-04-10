import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LANG } from '@models/lang.model';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private _subscription = new Subscription();

  constructor(private readonly titleService: Title, private readonly translateService: TranslateService) {
    this.translateService.setDefaultLang(LANG.EN);
    this.translateService.use(LANG.EN);
  }

  ngOnInit(): void {
    this._subscription.add(
      this.translateService.onLangChange.pipe(
        map((event: LangChangeEvent) => {
          this.translateService.reloadLang(event.lang);
          this.translateService.get('app-name').subscribe(value => {
            this.titleService.setTitle(value);
          })
      })).subscribe()
    );
  }

  ngOnDestroy(): void {
      this._subscription.unsubscribe();
  }
}
