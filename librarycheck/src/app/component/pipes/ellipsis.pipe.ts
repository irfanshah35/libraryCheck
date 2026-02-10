import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsis',
    standalone: true,
})
export class EllipsisPipe implements PipeTransform {
    transform(value: string, maxLength: number): any {
        const suffix = value && value.length > maxLength ? '...' : '';
        return value.slice(0, maxLength) + suffix;
    }
}
