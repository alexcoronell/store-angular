import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

import { Product } from '@shared/models/product.model';

/* Pipes */
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, ReversePipe, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product = input.required<Product>();
  addToCart = output<Product>();
  randomImage = 'https://picsum.photos/640/640?r=' + Math.random();
  date: Date = new Date();

  addToCartHandler() {
    this.addToCart.emit(this.product());
  }
}
