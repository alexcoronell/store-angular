import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  img = input.required<string>()
  price = input.required<number>()
  title = input.required<string>()
  //img = 'https://picsum.photos/640/640?r=' + Math.random()
}
