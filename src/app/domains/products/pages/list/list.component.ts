import { Component, signal, inject, OnInit } from '@angular/core';

/* Components */
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductComponent } from '@products/components/product/product.component';

/* Services */
import { ProductService } from '@shared/services/product.service';
import { CartService } from '@shared/services/cart.service';

/* Models */
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  products = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products)
        
      },
      error: e => console.error(e)
    })
  }
}
