import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@shared/models/product.model';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  private SERVER = 'https://api.escuelajs.co/api/v1/products';

  getProducts(category_id?: Category['id']) {
    const url = new URL(this.SERVER);
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getOne(id: Product['id']) {
    return this.http.get<Product>(`${this.SERVER}/${id}`);
  }
}
