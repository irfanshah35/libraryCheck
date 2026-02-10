import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumberBookmaker',
  standalone: true
})
export class ShortNumberBookmakerPipe implements PipeTransform {

  transform(number: number, args?: any): any {
    if (isNaN(number) || number === null) return null; // Return null if the value is not a number or null
  
    let abs = Math.abs(number);
    const isNegative = number < 0;
    
    // If the absolute value of the number is less than or equal to 99999, return the number without modification
    if (abs <= 99999) {
      let formattedNumber: string;
      // Check if the absolute value is an integer
      if (Number.isInteger(abs)) {
        formattedNumber = abs.toFixed(0); // Format as whole number without decimals
      } else {
        formattedNumber = abs.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 }); // Format with up to 2 decimal places
      }
      return (isNegative ? '-' : '') + formattedNumber;
    }
  
    let transformedAbs = abs; // New variable to hold the modified absolute value
  
    const rounder = Math.pow(10, 1);
    let key = '';
  
    const powers = [
      { key: 'Q', value: Math.pow(10, 15) },
      { key: 'T', value: Math.pow(10, 12) },
      { key: 'B', value: Math.pow(10, 9) },
      { key: 'M', value: Math.pow(10, 6) },
      { key: 'K', value: 1000 }
    ];
  
    for (let i = 0; i < powers.length; i++) {
      const reduced = abs / powers[i].value;
      if (reduced >= 1) {
        const roundedReduced = Math.round(reduced * rounder) / rounder;
        transformedAbs = roundedReduced; // Assign to the new variable
        key = powers[i].key;
        break;
      }
    }
  
    let formattedNumber: string;
  
    if (transformedAbs <= 99999) {
      formattedNumber = transformedAbs.toFixed(0); // Format as whole number without decimals
    } else {
      // Check if the absolute value is an integer to determine comma formatting
      if (Number.isInteger(transformedAbs)) {
        formattedNumber = transformedAbs.toLocaleString(); // Format with commas for thousands separator
      } else {
        formattedNumber = transformedAbs.toFixed(2); // Format with two decimal places
      }
    }
  
    return (isNegative ? '-' : '') + formattedNumber + key;
  }

}
