import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cart = new BehaviorSubject<any[]>([]);
  currentCart = this.cart.asObservable();

  constructor() { }

  addToCart(product: any) {
    const currentCartValue = this.cart.getValue();
    currentCartValue.push(product);
    this.cart.next(currentCartValue);
  }

  removeFromCart(index: number) {
    const currentCartValue = this.cart.getValue();
    currentCartValue.splice(index, 1);
    this.cart.next(currentCartValue);
  }

  getCart() {
    return this.cart.getValue();
  }
}
