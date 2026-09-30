import { Component } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonListItem],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
})
export class PokemonList {
  pokemonList: Pokemon[] = [
    { id: 1, name: 'Pikachu', gender: 'Male', type: 'Electric', generation: 'First' },
    { id: 2, name: 'Charizard', type: 'Fire', generation: 'First' },
    { id: 3, name: 'Squirtle', gender: 'Female', type: 'Water', generation: 'First' },
    { id: 4, name: 'Lucario', type: 'Fighting', generation: 'Fourth' },
    { id: 5, name: 'Gardevoir', gender: 'Female', type: 'Psychic', generation: 'Third' },
    { id: 6, name: 'Buizel', gender: 'Male', type: 'Water', generation: 'First' },
  ];
}
