import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullToZero',
  standalone: true
})
export class NullToZeroPipe implements PipeTransform {

  transform(value: any): number {
    return value == null || value === '' || isNaN(value) ? 0 : value;
  }

}
