import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  img = input.required<string>()
  price = input.required<number>()
  title = input.required<string>()
  addToCart = output<string>()
  image = computed(() => this.img() + Math.random())

  addToCartHandler() {
    console.log('click from child')
    this.addToCart.emit('Hola, este es un mensaje desde el hijo')
  }
  
}
