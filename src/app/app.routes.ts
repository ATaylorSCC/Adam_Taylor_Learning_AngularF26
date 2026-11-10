import { Routes } from '@angular/router';
import { PokemonList } from './pokemon-list/pokemon-list';
import { PokemonDetail } from './pokemon-detail/pokemon-detail';
import { PokemonForm } from './pokemon-form/pokemon-form';
import { editGuard } from './guards/edit-guard';

export const routes: Routes = [
  {path: 'pokemon', component: PokemonList},
  {path: 'pokemon/add', component: PokemonForm},
  {path: 'pokemon/:id', component: PokemonDetail},
  {path: 'pokemon/edit/:id', component: PokemonForm, canActivate: [editGuard]},
  {path: '', redirectTo: 'pokemon', pathMatch: 'full'}
];
