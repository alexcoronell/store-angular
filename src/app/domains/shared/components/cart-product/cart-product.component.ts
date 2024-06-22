import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})
export class CartProductComponent {
  product = input.required<Product>()
}
