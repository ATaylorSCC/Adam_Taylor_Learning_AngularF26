import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_CONFIG} from './config/app-config';

import {PokemonService} from './services/pokemon-service';
import {MockPokemonService} from './services/MockPokemonService';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'Fire'
      }
    },

    // this is what i would change for the mock data
    // {
    //   provide: PokemonService,
    //   useClass: MockPokemonService
    // }

  ]
};
