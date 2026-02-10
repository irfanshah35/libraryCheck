import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: true,
})
export class CamelCasePipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return ''; // Return an empty string if value is falsy
    }

    const words = value.split('_');
    const camelCaseWords = words.map((word: string, index: number) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return camelCaseWords.join('');
  }
}

