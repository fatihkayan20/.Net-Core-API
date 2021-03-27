import { Product } from 'src/app/models/product';
import { CartItems } from './../models/cartItems';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart = (product: Product) => {
    let item = CartItems.find((c) => c.product.productId === product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;

      CartItems.push(cartItem);
    }
  };

  removeFromCart = (cartItem: CartItem) => {
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      let item = CartItems.find(
        (c) => c.product.productId === cartItem.product.productId
      );
      item ? CartItems.splice(CartItems.indexOf(item), 1) : null;
    }
  };

  list = (): CartItem[] => {
    return CartItems;
  };
}
