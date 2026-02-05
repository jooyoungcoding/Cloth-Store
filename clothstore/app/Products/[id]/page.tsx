"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { products, ProductColor } from "@/common/SampleData";
import { useParams } from "next/navigation";

export default function ProductDetailsPage({
  params,
}: {
  params: { id?: string };
}) {
  const routeParams = useParams();
  const id = params?.id ?? routeParams?.id;
  const product = products.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState<string>(
    product ? product.img[0] : "",
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  return (
    <div className="container mx-auto flex justify-center py-10">
      <div className="flex w-full max-w-6xl p-8 gap-56">
        {/* Left: Images */}
        <div className="flex gap-6">
          {/* Thumbnails */}

          {/* Main Image */}
          <div className="relative w-[350px] h-[420px] rounded overflow-hidden bg-gray-100">
            <Image
              src={activeImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6.25">
            {product.img.map((img, idx) => (
              <button
                key={img}
                className={`w-16 h-16 border rounded overflow-hidden ${activeImage === img ? "border-black" : "border-gray-200"}`}
                onClick={() => setActiveImage(img)}
              >
                <Image
                  src={img}
                  alt={product.name + " thumbnail"}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
        {/* Right: Info */}
        <div className="flex-1 flex flex-col gap-6 min-w-[320px] max-w-[400px] border border-gray-300 p-8 relative">
          {/* Heart icon top right */}
          <button className="absolute top-4 right-4 ">
            <Heart
              size={22}
              className="text-gray-400 hover:text-red-500 transition-colors duration-300"
            />
          </button>
          <div>
            <h1 className="text-xl text-black font-semibold mb-1 uppercase tracking-wide">
              {product.name}
            </h1>
            <div className="text-lg font-medium mb-1">$99</div>
            <div className="text-xs text-gray-500 mb-2">
              MRP incl. of all taxes
            </div>
            <div className="text-sm text-gray-700 mb-4">
              {product.description}
            </div>
          </div>
          {/* Color */}
          <div>
            <div className="text-xs mb-2">Color</div>
            <div className="flex gap-2">
              {product.colors.map((c: ProductColor) => (
                <button
                  key={c.name}
                  className={`w-8 h-8 border ${selectedColor === c.name ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: c.code }}
                  onClick={() => setSelectedColor(c.name)}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>
          {/* Size */}
          <div>
            <div className="text-xs mb-2">Size</div>
            <div className="flex gap-2 mb-2 text-black">
              {product.size.map((s) => (
                <button
                  key={s}
                  className={`h-10 w-10 border text-xs ${selectedSize === s ? "border-black bg-gray-100" : "border-gray-300"}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-2 text-[11px] text-gray-500">
              <span className="underline cursor-pointer">FIND YOUR SIZE</span>
              <span>|</span>
              <span className="underline cursor-pointer">
                MEASUREMENT GUIDE
              </span>
            </div>
          </div>
          {/* CTA */}
          <button
            disabled={!selectedColor || !selectedSize}
            className={`
    w-full py-3 text-sm font-medium mt-2
    bg-[#d7d7d7] text-black
    transition-all duration-300

    ${
      !selectedColor || !selectedSize
        ? "opacity-50"
        : "hover:bg-[#09090957] hover:text-white cursor-pointer"
    }
  `}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
