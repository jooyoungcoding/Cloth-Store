"use client";
import React from "react";
import FilterSidebar from "@/components/home/FilteredSideBar";
import { Key, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import ItemsCardProducts from "@/components/layouts/ItemsCardProducts";
import { products } from "@/common/SampleData";
import { ul } from "framer-motion/client";

const ITEMS_PER_PAGE = 3;

const Page = () => {
  const [activeTab, setActiveTab] = useState("new");

  const filterMenus = [
    { tab: "new", name: "NEW" },
    { tab: "max", name: "MAX" },
    { tab: "min", name: "MIN" },
    { tab: "trending", name: "TRENDING" },
    { tab: "top-rated", name: "TOP-RATED" },
    { tab: "popular", name: "POPULAR" },
  ];

  return (
    <>
      {" "}
      <div className="container mx-auto px-6 py-8 font-LeagueSpartan-Light">
        <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] gap-x-10">
          {/* Title – chỉ nằm ở cột content */}
          <div className="col-start-2 mb-10">
            <p className="text-sm text-gray-500 mb-2">
              <Link
                href="/"
                className="hover:text-gray-600 transition-colors duration-300"
              >
                Home /{" "}
              </Link>
              <span className="text-black font-medium">Products</span>
            </p>
            <h1 className="text-3xl font-semibold text-black">PRODUCTS</h1>
          </div>

          {/* Sidebar – bắt đầu từ row 2 */}
          <div className="row-start-2">
            <FilterSidebar />
          </div>

          {/* Main content – row 2 */}
          <div className="row-start-2">
            {/* Search */}
            <div className="flex items-start">
              {" "}
              <form className="relative w-[420px] mb-10">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  placeholder="Search"
                  className="w-full bg-[#d7d7d7] py-6 pl-12 pr-4 text-sm focus:outline-none text-black text-right"
                />
              </form>
              <ul className="grid grid-cols-3 gap-2 ml-10">
                {" "}
                {filterMenus.map((item) => (
                  <li key={item.tab}>
                    {" "}
                    <button
                      onClick={() => setActiveTab(item.tab)}
                      className={`w-full border border-[#d7d7d7] px-2 py-1 text-sm font-medium uppercase  ${activeTab === item.tab ? "border-black bg-black" : "text-gray-800 hover:bg-[#d7d7d7] hover:text-white transition-colors duration-300"}`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-15">
              {" "}
              {products.map((item) => (
                <div key={item.id}>
                  <ItemsCardProducts product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
