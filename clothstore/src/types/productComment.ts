// src/types/productComment.ts
export interface ProductComment {
  id: number;
  product_id: number;
  user_id: string;

  content: string;
  rating: number | null;

  created_at: string;
}
