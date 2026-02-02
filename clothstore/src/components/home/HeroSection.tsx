"use client";
import React from "react";
import {
  Search,
  MoveRight,
  ChevronRight,
  ChevronLeft,
  Key,
} from "lucide-react";
import { useState } from "react";
import Button from "../UI/Button";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [];

  const menus = [
    { label: "MEN", href: "/men" },
    { label: "WOMEN", href: "/women" },
    { label: "KIDS", href: "/kids" },
  ];

  const images = [
    { id: 1, img: "./img1.png", alt: "img carousel" },
    { id: 2, img: "./img2.png", alt: "img carousel" },
    { id: 3, img: "./img2.png", alt: "img carousel" },
    { id: 4, img: "./img1.png", alt: "img carousel" },
    { id: 5, img: "./img1.png", alt: "img carousel" },
  ];

  for (let i = 0; i < images.length; i += 2) {
    slides.push(images.slice(i, i + 2));
  }
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrv = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto">
      <ul className="space-y-2">
        {menus.map((item) => (
          <li key={item.href} className="font-LeagueSpartan-Light text-black">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        {" "}
        <form className="relative">
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search"
            className="bg-[#d7d7d7] py-2 px-5 text-[#626262] focus:outline-none text-right"
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none flex items-center">
            <Search className="text-black" size={20} />
          </span>
        </form>
      </div>
      <div className="flex mt-16">
        {" "}
        <div className="mt-2">
          {" "}
          <div className="text-black font-bold  text-5xl font-LeagueSpartan-Light">
            {" "}
            <p>NEWS</p>
            <p>COLLECTIONS</p>
          </div>
          <div className="font-LeagueSpartan-Light text-[#262626]">
            <p>Summer</p>
            <p>2025</p>
          </div>
          <div className="flex items-start gap-6 py-44.5">
            <Button
              text="Go To Shop"
              icon={<MoveRight />}
              iconPosition="right"
              href="./shop"
              bgColor="#d7d7d7"
              textColor="black"
              iconColor="black"
              height="37px"
              className="inline-flex items-center justify-between  bg-[#d7d7d7]  text-black text-lg "
            />
            <div className="flex gap-2">
              <Button
                width="37px"
                height="37px"
                text=""
                bgColor=""
                border="2px solid"
                borderColor="#aaaaaa"
                iconColor="black"
                icon={<ChevronLeft />}
                onClick={handlePrv}
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
              />
            </div>
          </div>
        </div>
        <div className="gap-14 max-w-3xl ml-36 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="min-w-full flex gap-14">
                {slide.map((item) => (
                  <div key={item.id} className="w-1/2">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full object-cover"
                    />
                  </div>
                ))}

                {/* 👇 Slot giữ chỗ nếu slide chỉ có 1 ảnh */}
                {slide.length === 1 && <div className="w-1/2" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
