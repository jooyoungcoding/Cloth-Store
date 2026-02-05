export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;

  name: string;
  price: number;
  size: string;
  color: string;

  quantity: number;
}
