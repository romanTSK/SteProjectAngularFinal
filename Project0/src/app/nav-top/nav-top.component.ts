import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { isBrowser } from '../utils/is-browser';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements AfterViewInit {
  private bsOffcanvas: any;
  public searchQuery: string = '';
  public cart: any[] = [];  

  constructor(private cartService: CartService, private router: Router) {
    
    this.cart = this.cartService.getCart();  

    
    this.cartService.getCartObservable().subscribe(cart => {
      this.cart = cart;
    });
  }

  ngAfterViewInit() {
    if (isBrowser()) {
      import('bootstrap').then((bootstrap) => {
        const offcanvasElement = document.getElementById('offcanvasCart');
        if (offcanvasElement) {
          this.bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
        }
      });
    }
  }

  openCart() {
    if (this.bsOffcanvas) {
      this.bsOffcanvas.show();
    }
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  search() {
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }
}
