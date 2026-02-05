// src/types/productImage.ts
export interface ProductImage {
  id: number;
  product_id: number;

  url: string;
  alt: string | null;
  is_primary: boolean;
  position: number;

  created_at: string;
}
