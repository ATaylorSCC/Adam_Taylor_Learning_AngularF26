import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { APP_CONFIG } from './config/app-config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';
import {PokemonService} from './services/pokemon-service';
import {MockPokemonService} from './services/MockPokemonService';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor])),
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://pokeapi.co/api/v2',
        defaultCategory: 'Fire',
      },
    },
  ],
};
