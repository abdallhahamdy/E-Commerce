import { CartItem } from "./cart-item";

export class OrderItem {
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  productId: string;

  constructor(CartItem: CartItem) {
    this.imageUrl = CartItem.imageUrl;
    this.quantity = CartItem.quantity;
    this.unitPrice = CartItem.unitPrice;
    this.productId = CartItem.id;
  }
}
