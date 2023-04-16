import { Component, OnInit } from '@angular/core';
import { FoodfactService } from 'src/app/services/foodfact.service';
import { ResponseProducts } from 'src/app/services/model/response-products';

@Component({
  selector: 'search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.scss']
})
export class SearchNameComponent implements OnInit {
  response : any;
  constructor(private foodFactService : FoodfactService) {}
  
  ngOnInit(): void {
    this.search("");
  }

  search(brand: any) {
    this.foodFactService.getFoodsByName(brand).subscribe((response)=> {
      this.response = response;
    })
  }
}
