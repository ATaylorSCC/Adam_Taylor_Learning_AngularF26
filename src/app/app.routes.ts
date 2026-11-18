import { Routes } from '@angular/router';
import { editGuard } from './guards/edit-guard';

export const routes: Routes = [
  {
    path: 'pokemon',
    loadComponent: () => import('./pokemon-list/pokemon-list').then((m) => m.PokemonList),
  },
  {
    path: 'pokemon/add',
    loadComponent: () => import('./pokemon-form/pokemon-form').then((m) => m.PokemonForm),
  },
  {
    path: 'pokemon/edit/:id',
    loadComponent: () => import('./pokemon-form/pokemon-form').then((m) => m.PokemonForm),
    canActivate: [editGuard],
  },
  {
    path: 'pokemon/:id',
    loadComponent: () => import('./pokemon-detail/pokemon-detail').then((m) => m.PokemonDetail),
  },
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
];
