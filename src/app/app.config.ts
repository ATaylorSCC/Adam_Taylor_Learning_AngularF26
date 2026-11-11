import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { APP_CONFIG } from './config/app-config';
import { provideHttpClient } from '@angular/common/http';

import {PokemonService} from './services/pokemon-service';
import {MockPokemonService} from './services/MockPokemonService';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),

    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://pokeapi.co/api/v2',
        defaultCategory: 'Fire',
      },
    },
  ],
};
