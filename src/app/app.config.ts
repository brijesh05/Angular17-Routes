import { ApplicationConfig, EnvironmentInjector } from '@angular/core';
import { ROUTER_CONFIGURATION, RouteReuseStrategy, provideRouter, withComponentInputBinding, withHashLocation, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment'

export const appConfig: ApplicationConfig = {


  providers: [provideRouter(routes,
    withHashLocation(),
    withComponentInputBinding(),
    withRouterConfig({
      paramsInheritanceStrategy: 'always'
    })), { provide: APP_BASE_HREF, useValue: environment.appName }, provideAnimationsAsync()],
    
};
