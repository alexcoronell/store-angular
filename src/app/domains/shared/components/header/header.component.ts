import { Component, signal, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

/* Components */
import { CartProductComponent } from '../cart-product/cart-product.component';

/* Services */
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, CurrencyPipe, CartProductComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  hideSideMenu = signal(true);

  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }
}
