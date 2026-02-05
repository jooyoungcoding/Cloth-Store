// src/types/cartItem.ts
export interface CartItem {
  id: number;
  cart_id: number;
  product_id: number;

  name: string;
  price: number;
  image: string;

  size: string;
  color: string;

  quantity: number;
  created_at: string;
}
