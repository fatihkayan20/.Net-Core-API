import { Product } from 'src/app/models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Product[], filter: string): Product[] {
    filter = filter?.toLocaleLowerCase();
    return value.filter(
      (x: Product) => x.productName.toLocaleLowerCase().indexOf(filter) !== -1
    );
  }
}
