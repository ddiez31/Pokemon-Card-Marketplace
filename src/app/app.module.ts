import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
import { NgxTranslateRoutesModule } from 'ngx-translate-routes';
import { LANG } from '@models/lang.model';
import { HomeModule } from './pages/home/home.module';
import { HttpModule } from './config/http.module';
import { HttpInterceptorService } from './services/http-interceptor.service';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpModule.forRoot({ environment }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    TranslateModule.forRoot({
      defaultLanguage: LANG.EN,
      useDefaultLang: true,
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
    NgxTranslateRoutesModule.forRoot({
      enableTitleTranslate: false
    }),
    SharedModule,
    HomeModule
  ],
  providers: [
    Title,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
