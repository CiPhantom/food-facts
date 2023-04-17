import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodfactService } from 'src/app/services/footfactapi/foodfact.service';
import { Product } from 'src/app/services/footfactapi/model/product';
import { ResponseProducts } from 'src/app/services/footfactapi/model/response-products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: number | undefined;
  product: Product | undefined;
  
  constructor(private route: ActivatedRoute, private foodFactService: FoodfactService) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    if(this.productId) {
      this.foodFactService.getFoodsByCode(this.productId).subscribe((response: ResponseProducts | any) => {
        this.product = response.products[0];
      });
    }
  }
}
