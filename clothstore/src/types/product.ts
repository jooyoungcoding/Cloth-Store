// src/types/product.ts
export type ProductCategory =
  | "men"
  | "women"
  | "kids"
  | "casual"
  | "party"
  | "fitness";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string | null;
  category: ProductCategory;

  sizes: string[];
  colors: string[];

  rating: number | null;
  quantity: number;

  created_at: string;
}
