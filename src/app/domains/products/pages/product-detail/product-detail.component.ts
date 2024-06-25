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
  randomImages = signal<string[]>([]);
  currentImage = signal<number>(0);

  ngOnInit(): void {
    if (this.id()) {
      const id = parseInt(this.id());
      this.getProduct(id);
    }
  }

  getProduct(id: Product['id']) {
    this.productService.getOne(id).subscribe({
      next: (res) => {
        this.product.set(res);
        this.generateImages();
      },
      error: (e) => console.error(e),
    });
  }

  generateImages() {
    const quantity = this.product()?.images.length;
    if (quantity) {
      for (let i = 0; i < quantity; i++) {
        const randomImage = 'https://picsum.photos/640/640?r=' + Math.random();
        this.randomImages.update((prevState) => [...prevState, randomImage]);
      }
    }
  }

  loadImage(index: number) {
    this.currentImage.set(index);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
