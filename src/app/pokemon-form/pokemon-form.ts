import { Component, effect, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonService } from '../services/pokemon-service';
import { pokemonNameValidator } from '../validators/pokemon-name.validator';
import { pokemonGenerationValidator } from '../validators/pokemon-generation.validator';

@Component({
  selector: 'app-pokemon-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pokemon-form.html',
  styleUrl: './pokemon-form.scss',
})
export class PokemonForm {
  id = input<string>();

  private fb = inject(FormBuilder);
  private pokemonService = inject(PokemonService);

  pokemonForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), pokemonNameValidator]],
    type: ['', Validators.required],
    gender: [''],
    generation: ['']
    },{
    validators: pokemonGenerationValidator
  });

  constructor() {
    effect(() => {
      const pokemonId = Number(this.id());

      if (this.id()) {
        const pokemon = this.pokemonService.pokemonList().find((p) => p.id === pokemonId);

        if (pokemon) {
          this.pokemonForm.patchValue({
            name: String(pokemon.name),
            type: pokemon.type,
            gender: pokemon.gender ?? '',
            generation: pokemon.generation,
          });
        }
      }
    });
  }
  protected readonly onsubmit = onsubmit;

  onSubmit(): void {
    if (this.pokemonForm.invalid) return;

    const value = this.pokemonForm.getRawValue();

    const pokemon = {
      id: this.id() ? Number(this.id()) : Date.now(),
      name: value.name ?? '',
      type: value.type ?? '',
      gender: value.gender ?? '',
      generation: value.generation ?? '',
    };

    if (this.id()) {
      this.pokemonService.updatePokemon(pokemon);
    } else {
      this.pokemonService.addPokemon(pokemon);
    }

    this.pokemonForm.reset();
  }
}
