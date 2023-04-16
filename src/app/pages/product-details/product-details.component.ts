import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodfactService } from 'src/app/services/foodfact.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: number | undefined;
  
  constructor(private route: ActivatedRoute, private foodFactService: FoodfactService) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
  }
}
