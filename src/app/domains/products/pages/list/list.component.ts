import {
  Component,
  signal,
  inject,
  OnInit,
  OnChanges,
  input,
  SimpleChanges,
} from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

/* Components */
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductComponent } from '@products/components/product/product.component';

/* Services */
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { CartService } from '@shared/services/cart.service';

/* Models */
import { Product } from '@shared/models/product.model';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLinkWithHref, HeaderComponent, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit, OnChanges {
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private cartService = inject(CartService);

  category_id = input<string>();

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(this.category_id()).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (e) => console.error(e),
    });
  }

  getCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => this.categories.set(categories),
      error: (e) => console.error(e),
    });
  }
}
