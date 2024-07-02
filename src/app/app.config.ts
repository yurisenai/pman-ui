import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(BrowserModule),
    provideHttpClient()
  ]
};
