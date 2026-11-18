import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderLabel',
})
export class GenderLabelPipe implements PipeTransform {
  transform(gender: string | null | undefined): string {
    if (!gender || gender.trim() === '') {
      return 'Unknown';
    }

    return gender;
  }
}
