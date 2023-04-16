import { Component, OnInit } from '@angular/core';
import { FoodfactService } from 'src/app/services/foodfact.service';
import { ResponseProducts } from 'src/app/services/model/response-products';

@Component({
  selector: 'search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.scss']
})
export class SearchNameComponent implements OnInit {
  response : ResponseProducts | undefined;
  brand: string = "";
  constructor(private foodFactService : FoodfactService) {}
  
  ngOnInit(): void {
    this.search("");
  }

  search(brand: string, page = 1) {
    this.foodFactService.getFoodsByName(brand, page).subscribe((response: ResponseProducts | any) => {
      this.response = response;
      this.brand = brand;
    })
  }

  next() { 
    if(this.response) {
      this.search(this.brand, this.response?.page + 1);
    }
  }

  previous() {
    if(this.response) {
      this.search(this.brand, this.response?.page - 1);  
      console.log(this.response);
    }
  }
}
