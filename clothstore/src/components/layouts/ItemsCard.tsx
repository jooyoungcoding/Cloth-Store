import React from "react";
import Image from "next/image";
import { PlusIcon, Heart } from "lucide-react";

interface ProductComment {
  content: string;
  user: string;
  date: string;
}

export type ProductColor = {
  name: string; // tên hiển thị (White, Black, Red...)
  code: string; // mã màu (#fff, #000, rgb...)
};

interface Product {
  id: number;
  name: string;
  colors: ProductColor[];
  size: string[];
  quantity: number;
  rating: number;
  category: string;
  comment: ProductComment[];
  img: string[]; // nhiều ảnh
  price: number; // đơn vị: VND
  description: string;
}

interface ItemsCardProps {
  product: Product;
}

const ItemsCard: React.FC<ItemsCardProps> = ({ product }) => {
  return (
    <div className="mt-9 max-w-[320px]">
      <div className="flex flex-col">
        <div className="w-full border-none aspect-square relative hover:scale-95 transition-all duration-300">
          <img
            src={product.img[0]}
            className="object-contain hover:cursor-pointer w-[400px] w-[400px]"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 text-black">
            <button className="px-1 py-1 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer transition-colors duration-300">
              <PlusIcon />
            </button>
            <button className="px-1 py-1 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer transition-colors duration-300">
              <Heart />
            </button>
          </div>{" "}
        </div>

        <div className="mt-1">
          <p className="text-sm text-gray-500">
            {product.category} <span>+3 colors</span>
          </p>

          <div className="flex items-center justify-between gap-4">
            <h3 className="font-medium text-sm text-black">{product.name}</h3>
            <span className="font-medium text-sm text-black">
              $ {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
