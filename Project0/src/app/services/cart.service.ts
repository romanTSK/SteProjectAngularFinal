import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private cart: any[] = [];

  addToCart(item: any) {
    this.cart.push(item);
    this.cartSubject.next([...this.cart]);
  }

  getCart(): any[] {
    return this.cart;
  }

  getCartObservable(): Observable<any[]> {
    return this.cartSubject.asObservable();
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this.cartSubject.next([...this.cart]);
  }
}
