import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseFirstLetter',
  standalone: true,
})
export class UppercaseFirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    const string: string[] = value.split('');
    string[0] = string[0].toUpperCase();
    return string.join('');
  }
}
