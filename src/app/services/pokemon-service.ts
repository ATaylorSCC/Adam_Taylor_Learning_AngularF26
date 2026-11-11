import { computed, effect, signal, inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import {APP_CONFIG} from '../config/app-config';
import { HttpClient } from '@angular/common/http';
import { PokemonApi } from '../shared/models/pokemon-api';
import { map, forkJoin, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private config = inject(APP_CONFIG);
  defaultCategory = this.config.defaultCategory;
  apiBaseUrl = this.config.apiBaseUrl;
  private http = inject(HttpClient);
  error = signal<string | null>(null);
  loading = signal(false);

  private pokemons = signal<Pokemon[]>([
    // { id: 1, name: 'Pikachu', gender: 'Male', type: 'Electric', generation: 'First' },
    // { id: 2, name: 'Charizard', type: 'Fire', generation: 'First' },
    // { id: 3, name: 'Squirtle', gender: 'Female', type: 'Water', generation: 'First' },
    // { id: 4, name: 'Lucario', type: 'Fighting', generation: 'Fourth' },
    // { id: 5, name: 'Gardevoir', gender: 'Female', type: 'Psychic', generation: 'Third' },
    // { id: 6, name: 'Buizel', gender: 'Male', type: 'Water', generation: 'First' },
  ]);

  pokemonList = this.pokemons.asReadonly();
  pokemonCount = computed(() => this.pokemons().length);

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.update((list) => [...list, pokemon]);
  }
  removePokemon(id: number): void {
    this.pokemons.update((list) => list.filter((pokemon) => pokemon.id !== id));
  }
  updatePokemon(pokemon: Pokemon): void {
    this.pokemons.update((list) => list.map((p) => (p.id === pokemon.id ? pokemon : p)));
  }

  fireTypePokemon = computed(() =>
    this.pokemonList().filter((p) => p.type === this.config.defaultCategory),
  );
  fireTypeCount = computed(() => this.fireTypePokemon().length);

  waterTypePokemon = computed(() => this.pokemonList().filter((p) => p.type === 'Water'));
  waterTypeCount = computed(() => this.waterTypePokemon().length);

  grassTypePokemon = computed(() => this.pokemonList().filter((p) => p.type === 'Grass'));
  grassTypeCount = computed(() => this.grassTypePokemon().length);

  electricTypePokemon = computed(() => this.pokemonList().filter((p) => p.type === 'Electric'));
  electricTypeCount = computed(() => this.electricTypePokemon().length);

  fightingTypePokemon = computed(() => this.pokemonList().filter((p) => p.type === 'Fighting'));
  fightingTypeCount = computed(() => this.fightingTypePokemon().length);

  psychicTypePokemon = computed(() => this.pokemonList().filter((p) => p.type === 'Psychic'));
  psychicTypeCount = computed(() => this.psychicTypePokemon().length);

  constructor() {
    effect(() => {
      console.log('Pokemon Index: ', this.pokemonCount);
    });
    this.load();
  }

  // for the sake of the bonus mark week 4
  addRandomPokemon(): void {
    const randomPokemon = [
      { id: 7, name: 'Bulbasaur', gender: 'Male', type: 'Grass', generation: 'First' },
      { id: 8, name: 'Vulpix', gender: 'Female', type: 'Fire', generation: 'First' },
      { id: 9, name: 'Psyduck', gender: 'Male', type: 'Water', generation: 'First' },
      { id: 10, name: 'Abra', gender: 'Male', type: 'Psychic', generation: 'First' },
    ];

    const random = Math.floor(Math.random() * randomPokemon.length);

    this.addPokemon(randomPokemon[random]);
  }

  getPokemonFromApi() {
    return this.http
      .get<PokemonApi>(`${this.config.apiBaseUrl}/pokemon/pikachu`)
      .pipe(map((apiPokemon) => this.mapPokemon(apiPokemon)));
  }

  mapPokemon(apiPokemon: PokemonApi): Pokemon {
    const type = apiPokemon.types[0]?.type.name ?? '';

    return {
      id: apiPokemon.id,
      name: apiPokemon.name,
      type: type.charAt(0).toUpperCase() + type.slice(1),
      gender: '',
      generation: '',
    };
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.http
      .get<{
        results: { name: string; url: string }[];
      }>(`${this.config.apiBaseUrl}/pokemon`, {
        params: { limit: 20 },
      })
      .pipe(
        switchMap((response) => {
          const requests = response.results.map((pokemon) =>
            this.http.get<PokemonApi>(pokemon.url),
          );

          return forkJoin(requests);
        }),
        map((results) => results.map((pokemon) => this.mapPokemon(pokemon))),
      )
      .subscribe({
        next: (list) => {
          this.pokemons.set(list);
          this.error.set(null);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Could not load Pokemon.');
          this.loading.set(false);
        },
      });
  }
}
