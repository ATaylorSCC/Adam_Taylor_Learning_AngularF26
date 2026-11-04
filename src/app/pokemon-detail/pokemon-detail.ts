import { Component, input, inject, computed } from '@angular/core';
import {PokemonService} from '../services/pokemon-service';

@Component({
  selector: 'app-pokemon-detail',
  imports: [],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.scss',
})
export class PokemonDetail {
  id = input<string>();

  private pokemonService = inject(PokemonService);

  pokemon = computed(() => {
    const pokemonId = Number(this.id());
    return this.pokemonService.pokemonList().find(p => p.id === pokemonId);
  })
}
