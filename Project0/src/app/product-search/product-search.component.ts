import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';  

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']  
})
export class ProductSearchComponent {
  title = 'Project0';

  public minPrice: string = '';
  public maxPrice: string = '';
  public keyWord: string = '';

  public apiInfo: any;

  public productList: any[] = [];

  constructor(private service: HttpService) {}

  filter() {
    this.service.getData(this.keyWord, this.maxPrice, this.minPrice).subscribe((data: any) => {
      console.log(data);
      this.apiInfo = data;
      this.productList = this.apiInfo.products;
    });
  }
}