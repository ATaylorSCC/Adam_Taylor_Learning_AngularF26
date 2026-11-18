import { Component, input, inject, computed, OnInit, OnDestroy } from '@angular/core';
import {PokemonService} from '../services/pokemon-service';

@Component({
  selector: 'app-pokemon-detail',
  imports: [],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.scss',
})
export class PokemonDetail implements OnInit, OnDestroy {
  id = input<string>();
  private startTime = Date.now();

  private pokemonService = inject(PokemonService);

  pokemon = computed(() => {
    const pokemonId = Number(this.id());
    return this.pokemonService.pokemonList().find((p) => p.id === pokemonId);
  });

  ngOnInit(): void {
    const id = this.id();

    console.log('[lifecycle] opened: Pokemon ' + id);
  }

  ngOnDestroy(): void {
    const seconds = Math.round((Date.now() - this.startTime) / 1000);
    const name = this.pokemon()?.name;

    console.log('[lifecycle] closed: ' + name + ' after ' + seconds + ' seconds');
  }
}
