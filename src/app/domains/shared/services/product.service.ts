import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  private SERVER = 'https://api.escuelajs.co/api/v1';

  getProducts() {
    return this.http.get<Product[]>(`${this.SERVER}/products`);
  }

  getOne(id: Product['id']) {
    return this.http.get<Product>(`${this.SERVER}/products/${id}`);
  }
}
