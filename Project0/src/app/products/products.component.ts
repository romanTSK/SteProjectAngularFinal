import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList: any[] = [];

  constructor(private httpService: HttpService, private cartService: CartService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.httpService.getData().subscribe((data: any) => {
      this.productList = data.products;
    });
  }

  addToCart(item: any): void {
    this.cartService.addToCart(item);
    console.log('Cart:', this.cartService.getCart());
  }
}
