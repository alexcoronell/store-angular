import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product = input.required<Product>()
  addToCart = output<Product>()
  //image = computed(() => this.img() + Math.random())

  addToCartHandler() {
    this.addToCart.emit(this.product())
  }
  
}
