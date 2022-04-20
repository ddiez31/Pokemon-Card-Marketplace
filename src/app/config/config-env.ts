import { InjectionToken } from '@angular/core';

export interface ConfigEnv {
    environment: {
      baseUrl: string;
    };
  }

export const CONFIG_ENV = new InjectionToken<ConfigEnv>('ConfigEnv');
