// src/types/order.ts
export type OrderStatus =
  | "pending"
  | "paid"
  | "shipped"
  | "completed"
  | "cancelled";

export interface Order {
  id: number;
  user_id: string;

  total_price: number;
  status: OrderStatus;

  created_at: string;
}
