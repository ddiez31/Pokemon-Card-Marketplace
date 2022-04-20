import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ConfigEnv, CONFIG_ENV } from './config-env';

@NgModule({
    imports: [CommonModule]
  })
  export class HttpModule {
    static forRoot(config: ConfigEnv): ModuleWithProviders<HttpModule> {
      return {
        ngModule: HttpModule,
        providers: [
          {
            provide: CONFIG_ENV,
            useValue: config
          }
        ]
      };
    }
  }
