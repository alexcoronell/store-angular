import { Component, signal } from '@angular/core';

/* Components */
import { ProductComponent } from '../../components/product/product.component';

/* Models */
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  products = signal<Product[]>([])

constructor() {
  const initProducts: Product[] = [
    {
      id: Date.now(),
      title: 'Product 1',
      price: 100,
      image: 'https://picsum.photos/640/640?r=1',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Product 2',
      price: 100,
      image: 'https://picsum.photos/640/640?r=2',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Product 3',
      price: 100,
      image: 'https://picsum.photos/640/640?r=3',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Product 4',
      price: 100,
      image: 'https://picsum.photos/640/640?r=4',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Product 5',
      price: 100,
      image: 'https://picsum.photos/640/640?r=5',
      creationAt: new Date().toISOString()
    },
  ]
  this.products.set(initProducts)
}

  fromChild(event: string) {
    console.log(event);
  }
}
