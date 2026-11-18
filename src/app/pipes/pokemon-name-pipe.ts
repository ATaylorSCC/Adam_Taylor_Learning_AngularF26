import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName',
})
export class PokemonNamePipe implements PipeTransform {
  transform(name: string | number | null | undefined, prefix: string = ''): string {
    if (name === null || name === undefined || String(name).trim() === '') {
      return 'Unknown';
    }

    return prefix ? prefix + ' ' + name : String(name);
  }
}
