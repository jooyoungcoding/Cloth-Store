"use client";

import { ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import Dropdown from "../layouts/DropDown";
import DashedLine from "../layouts/DashedLine";

export default function FilterSidebar() {
  const [open, setOpen] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  return (
    <aside className="container mx-auto space-y-8 text-black font-LeagueSpartan-Light">
      <h2 className="font-semibold text-lg text-black">Filters</h2>

      {/* SIZE giữ nguyên */}
      <div>
        <h3 className="mb-3 font-bold">Size</h3>
        <div className="grid grid-cols-6 gap-2">
          {["XS", "S", "M", "L", "XL", "2X"].map((size) => (
            <button
              key={size}
              className="border text-sm py-1 hover:bg-black hover:text-white transition"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <DashedLine />

      {/* CATEGORY */}
      <Dropdown
        title="Category"
        open={open === "category"}
        onClick={() => toggle("category")}
      >
        <div className="grid grid-cols-2 gap-3">
          {["men", "women", "kids", "casual", "party", "fitness"].map((cat) => {
            const active = selectedCategories.includes(cat);

            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`
            border px-2 py-2 text-sm uppercase transition
            ${
              active
                ? "bg-black text-white border-black"
                : "bg-transparent text-black border-gray-300 hover:border-black"
            }
          `}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </Dropdown>

      {/* COLORS */}
      <Dropdown
        title="Colors"
        open={open === "colors"}
        onClick={() => toggle("colors")}
      >
        <div className="flex gap-3 flex-wrap">
          {[
            { name: "Black", code: "#000" },
            { name: "White", code: "#fff" },
            { name: "Red", code: "#ef4444" },
            { name: "Blue", code: "#1d4ed8" },
          ].map((color) => (
            <button
              key={color.name}
              title={color.name}
              className="w-6 h-6 border hover:scale-110 transition"
              style={{ backgroundColor: color.code }}
            />
          ))}
        </div>
      </Dropdown>

      {/* PRICE RANGE */}
      <Dropdown
        title="Price Range"
        open={open === "price"}
        onClick={() => toggle("price")}
      >
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="From"
            className="w-full border px-2 py-1 text-sm"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="To"
            className="w-full border px-2 py-1 text-sm"
          />
        </div>
      </Dropdown>

      {/* RATINGS */}
      <Dropdown
        title="Ratings"
        open={open === "ratings"}
        onClick={() => toggle("ratings")}
      >
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rate) => (
            <label
              key={rate}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="radio" name="rating" />
              <div className="flex">
                {Array.from({ length: rate }).map((_, i) => (
                  <Star key={i} size={14} className="fill-black text-black" />
                ))}
              </div>
            </label>
          ))}
        </div>
      </Dropdown>
    </aside>
  );
}
