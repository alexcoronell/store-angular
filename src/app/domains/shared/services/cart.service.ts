import { computed, Injectable, signal } from '@angular/core';

import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([])
  total = computed(() => this.cart().reduce((total, product) => total + product.price, 0))

  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product])
  }
}
