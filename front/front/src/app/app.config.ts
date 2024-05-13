import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SnackbarInterceptor } from '../services/snackbarInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes, withComponentInputBinding()), 
    provideClientHydration(), provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS, useClass: SnackbarInterceptor, multi: true
    }
  
  ]
};
