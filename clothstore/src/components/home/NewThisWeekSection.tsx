"use client";
import React from "react";
import ItemsCard from "../layouts/ItemsCard";
import { products } from "../../common/SampleData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../UI/Button";
import { useState } from "react";

const ITEMS_PER_PAGE = 4;

const NewThisWeekSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + ITEMS_PER_PAGE < products.length) {
      setCurrentIndex(currentIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (currentIndex - ITEMS_PER_PAGE >= 0) {
      setCurrentIndex(currentIndex - ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="container bg-[#ececec] mx-auto ">
      <div className="flex w-full justify-between items-end text-black font-bold text-6xl font-LeagueSpartan-Light">
        <p>
          NEW <br /> THIS WEEK
        </p>
        <div className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer">
          see all
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / ITEMS_PER_PAGE) * 100}%)`,
          }}
        >
          {products.map((item) => (
            <div key={item.id} className="w-1/4 shrink-0 px-4">
              <ItemsCard product={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        {" "}
        <Button
          width="37px"
          height="37px"
          text=""
          bgColor=""
          border="2px solid"
          borderColor="#aaaaaa"
          iconColor="black"
          icon={<ChevronLeft />}
          onClick={handlePrev}
        />
        <Button
          width="37px"
          height="37px"
          text=""
          bgColor=""
          border="2px solid"
          borderColor="#aaaaaa"
          iconColor="black"
          icon={<ChevronRight />}
          onClick={handleNext}
        />{" "}
      </div>
    </div>
  );
};

export default NewThisWeekSection;
