import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonService } from '../services/pokemon-service';

@Component({
  selector: 'app-pokemon-form',
  imports: [ReactiveFormsModule],
  templateUrl: './pokemon-form.html',
  styleUrl: './pokemon-form.scss',
})
export class PokemonForm {

  private fb = inject(FormBuilder);
  private pokemonService = inject(PokemonService);

  pokemonForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    type: ['', Validators.required],
    gender: [''],
    generation: ['']
  })
  protected readonly onsubmit = onsubmit;

  onSubmit(): void {
    if(this.pokemonForm.invalid) return;
    const value = this.pokemonForm.getRawValue();
    this.pokemonService.addPokemon({
      id: Math.max(0, ...this.pokemonService.pokemonList().map((p) => p.id)) + 1,
      name: value.name ?? '',
      type: value.type ?? '',
      gender: value.gender ?? '',
      generation: value.generation ?? '',
    });
    this.pokemonForm.reset();
    //console.log(this.pokemonForm.getRawValue());
  }
}
