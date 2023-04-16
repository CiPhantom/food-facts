import { Component, Input } from '@angular/core';
import { Product } from 'src/app/services/model/product';

@Component({
  selector: 'simple-product',
  templateUrl: './simple-product.component.html',
  styleUrls: ['./simple-product.component.scss']
})
export class SimpleProductComponent {
  @Input()
  product: any;
  
  constructor() {}
}
