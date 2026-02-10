// ordinal-date.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalDate',
  standalone: true,
})
export class OrdinalDatePipe implements PipeTransform {
  transform(value: Date | string | null): string {
    if (value === null) {
      return ''; // Return an empty string if value is null
    }

    const date = new Date(value);
    const day = date.getDate();
    const month = this.getMonthName(date.getMonth());
    const year = date.getFullYear();
    const suffix = this.getSuffix(day);

    return `${month} ${day}${suffix}, ${year}`;
  }

  private getSuffix(day: number) {
    return 'th';
  }

  private getMonthName(month: number): string {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[month];
  }
}
