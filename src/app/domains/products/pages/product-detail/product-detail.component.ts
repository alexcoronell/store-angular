import { Component, OnInit, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '@shared/services/product.service';
import { CartService } from '@shared/services/cart.service';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  id = input.required<string>();
  product = signal<Product | null>(null);
  cover = signal<string>('');

  ngOnInit(): void {
    if (this.id()) {
      const id = parseInt(this.id());
      this.getProduct(id);
    }
  }

  getProduct(id: Product['id']) {
    this.productService.getOne(id).subscribe({
      next: (product) => {
        this.product.set(product);
        if(product.images.length > 0) {
          this.cover.set(product.images[0])
        }
      },
      error: (e) => console.error(e),
    });
  }

  changeCover(newImage: string) {
    this.cover.set(newImage)
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
