import { Component, inject, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';
import { PokemonService } from '../services/pokemon-service';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
  imports: [PokemonListItem, RouterLink],
})
export class PokemonList implements OnInit {
  private pokemonService = inject(PokemonService);
  ngOnInit(): void {
    this.pokemonService.getPokemonFromApi().subscribe(data => {
      console.log(data);
    });
  }

  protected apiBaseUrl = this.pokemonService.apiBaseUrl;
  protected defaultCategory = this.pokemonService.defaultCategory;

  protected pokemonList = this.pokemonService.pokemonList;
  protected fireTypeCount = this.pokemonService.fireTypeCount;
  protected waterTypeCount = this.pokemonService.waterTypeCount;
  protected grassTypeCount = this.pokemonService.grassTypeCount;
  protected fightingTypeCount = this.pokemonService.fightingTypeCount;
  protected psychicTypeCount = this.pokemonService.psychicTypeCount;

  protected onPokemonOpened(pokemon: Pokemon): void {
    console.log('Pokemon has been opened:', pokemon);
  }

  removePokemon(id: number): void {
    this.pokemonService.removePokemon(id);
  }

  addRandomPokemon(): void {
    this.pokemonService.addRandomPokemon();
  }
}
