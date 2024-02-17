import { ApplicationConfig, EnvironmentInjector } from '@angular/core';
import { ROUTER_CONFIGURATION, RouteReuseStrategy, provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes,withHashLocation()),{provide:APP_BASE_HREF,useValue:'/test/'}, provideAnimationsAsync()]
};
