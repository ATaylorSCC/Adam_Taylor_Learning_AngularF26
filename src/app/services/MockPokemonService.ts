import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon';
import { APP_CONFIG } from '../config/app-config';

@Injectable()
export class MockPokemonService {
  private config = inject(APP_CONFIG);

  apiBaseUrl = this.config.apiBaseUrl;
  defaultCategory = this.config.defaultCategory;

  private pokemons = signal<Pokemon[]>([
    { id: 1, name: 'MOCK Pikachu', gender: 'Male', type: 'Electric', generation: 'First' },
    { id: 2, name: 'MOCK Charmander', gender: 'Male', type: 'Fire', generation: 'First' },
    { id: 3, name: 'MOCK Squirtle', gender: 'Female', type: 'Water', generation: 'First' },
  ]);

  pokemonList = this.pokemons.asReadonly();
  pokemonCount = computed(() => this.pokemons().length);

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.update((list) => [...list, pokemon]);
  }
  removePokemon(id: number): void {
    this.pokemons.update((list) => list.filter((pokemon) => pokemon.id !== id));
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
  }

  // for the sake of the bonus mark week 4
  addRandomPokemon(): void {
    const randomPokemon = [
      { id: 7, name: 'MOCK Bulbasaur', gender: 'Male', type: 'Grass', generation: 'First' },
      { id: 8, name: 'MOCK Vulpix', gender: 'Female', type: 'Fire', generation: 'First' },
      { id: 9, name: 'MOCK Psyduck', gender: 'Male', type: 'Water', generation: 'First' },
      { id: 10, name: 'MOCK Abra', gender: 'Male', type: 'Psychic', generation: 'First' },
    ];

    const random = Math.floor(Math.random() * randomPokemon.length);

    this.addPokemon(randomPokemon[random]);
  }
}

