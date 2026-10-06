import { Component, inject } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';
import { PokemonService } from '../services/pokemon-service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
  imports: [PokemonListItem],
})
export class PokemonList {
  private pokemonService = inject(PokemonService);
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
