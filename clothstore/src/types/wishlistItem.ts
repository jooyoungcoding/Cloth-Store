// src/types/wishlistItem.ts
export interface WishlistItem {
  id: number;
  wishlist_id: number;
  product_id: number;

  name: string;
  price: number;
  image: string;

  created_at: string;
}
