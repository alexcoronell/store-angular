import { Component, input, output } from '@angular/core';

import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product = input.required<Product>()
  addToCart = output<string>()
  //image = computed(() => this.img() + Math.random())

  addToCartHandler() {
    console.log('click from child')
    this.addToCart.emit('Hola, este es un mensaje desde el hijo')
  }
  
}
