import { AbstractControl, ValidationErrors } from '@angular/forms';

export function pokemonNameValidator(control: AbstractControl): ValidationErrors | null {
  const name = control.value;

  if (name && name.trim().length === 0) {
    return { whitespace: true };
  }

  return null;
}
