"use client";
import React from "react";
import ItemsCard from "../layouts/ItemsCard";
import { products, Products } from "@/common/SampleData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Button from "../UI/Button";

const ITEMS_PER_PAGE = 3;

const CollectionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredProducts =
    isActiveTab === "all"
      ? products
      : products.filter((product) => product.category.startsWith(isActiveTab));

  const tabs = [
    { label: "ALL", value: "all" },
    { label: "MEN", value: "men" },
    { label: "WOMEN", value: "women" },
    { label: "KIDS", value: "kids" },
  ];

  const handleChangeTab = (tab: string) => {
    setIsActiveTab(tab);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div className="container mx-auto mt-28">
      <div className="text-black font-LeagueSpartan-Light text-6xl font-bold">
        <h3>
          XIV <br /> COLLECTIONS <br /> 26-27
        </h3>
      </div>
      <div className="text-lg text-gray-500 mt-10">
        <ul className="list-none flex gap-6">
          {tabs.map((item) => (
            <li
              key={item.value}
              onClick={() => handleChangeTab(item.value)}
              className={`relative cursor-pointer transition-colors duration-300
        ${
          isActiveTab === item.value
            ? "text-black font-semibold"
            : "text-gray-500 hover:text-gray-800"
        }
      `}
            >
              {item.label}
              <span
                className={`absolute bottom-1 left-0 h-[2px] w-full bg-black
          origin-left transition-transform duration-300
          ${isActiveTab === item.value ? "scale-x-100" : "scale-x-0"}
        `}
              />
            </li>
          ))}
        </ul>
      </div>
      <hr className="w-full border-gray-300" />
      <div className="overflow-hidden">
        <div className="grid grid-cols-3 gap-36">
          {filteredProducts.slice(0, visibleCount).map((item) => (
            <div key={item.id} className="shrink-0 px-4">
              <ItemsCard product={item} />
            </div>
          ))}
        </div>
      </div>
      {filteredProducts.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center items-center mt-10">
          {visibleCount < filteredProducts.length ? (
            <button
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
              className="group flex flex-col items-center gap-1
                 text-black text-sm mb-5
                 transition-all duration-300 hover:text-gray-700 cursor-pointer"
            >
              <span>More</span>
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(ITEMS_PER_PAGE)}
              className="group flex flex-col items-center gap-1
                 text-black text-sm
                 transition-all duration-300 hover:text-gray-700 cursor-pointer"
            >
              <span>Less</span>
              <ChevronDown
                size={16}
                className="rotate-180 transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CollectionSection;
