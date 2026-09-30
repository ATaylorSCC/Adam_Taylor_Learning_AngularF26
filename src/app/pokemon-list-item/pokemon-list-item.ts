import { Component, input } from '@angular/core';
import { PokemonList } from '../pokemon-list/pokemon-list';

@Component({
  selector: 'app-pokemon-list-item',
  imports: [],
  templateUrl: './pokemon-list-item.html',
  styleUrl: './pokemon-list-item.scss',
})
export class PokemonListItem {
  pokemon = input.required<PokemonList>();
}
