import { Component } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
  imports: [PokemonListItem],
})
export class PokemonList {

}
