import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  private SERVER = 'https://api.escuelajs.co/api/v1/categories';

  getAll() {
    return this.http.get<Category[]>(this.SERVER);
  }
}
