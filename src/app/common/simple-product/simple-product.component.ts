import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/services/model/product';

@Component({
  selector: 'simple-product',
  templateUrl: './simple-product.component.html',
  styleUrls: ['./simple-product.component.scss']
})
export class SimpleProductComponent {
  @Input()
  product: Product | undefined;
  
  constructor(private router: Router) {}

  productDetails() : void {
    console.log("redirect");
    this.router.navigate(["product", this.product?.code]);
  }
}
