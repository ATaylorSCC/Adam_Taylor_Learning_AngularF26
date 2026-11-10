import { AbstractControl, ValidationErrors } from '@angular/forms';

export function pokemonGenerationValidator(control: AbstractControl): ValidationErrors | null {
  const type = control.get('type')?.value;
  const generation = control.get('generation')?.value;

  if (type?.toLowerCase() === 'fairy' && Number(generation) === 1) {
    return { invalidGeneration: true };
  }

  return null;
}
