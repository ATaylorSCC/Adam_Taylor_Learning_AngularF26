import { Component, input } from '@angular/core';
import { PokemonList } from '../pokemon-list/pokemon-list';
import { Pokemon } from '../shared/models/pokemon';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.html',
  styleUrl: './pokemon-list-item.scss',
})
export class PokemonListItem {
  pokemon = input.required<Pokemon>();
  expanded = false;

  toggle(): void{
    this.expanded = !this.expanded;
  }
}

