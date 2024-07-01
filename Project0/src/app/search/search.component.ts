import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public productList: any[] = [];
  public keyWord: string = '';
  public minPrice: string = '';  
  public maxPrice: string = '';  

  constructor(
    private route: ActivatedRoute,
    private service: HttpService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.keyWord = params['q'] || '';
      this.filter();
    });
  }

  filter(): void {
    this.service.getData(this.keyWord, this.maxPrice, this.minPrice).subscribe((data: any) => {
      this.productList = data.products;
    });
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);
    console.log('Cart:', this.cartService.getCart());
  }
}
