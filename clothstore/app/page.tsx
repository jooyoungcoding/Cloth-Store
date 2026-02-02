import React from "react";
import HeroSection from "@/components/home/HeroSection";
import NewThisWeekSection from "@/components/home/NewThisWeekSection";
import CollectionSection from "@/components/home/CollectionSection";
import OurApproachSection from "@/components/home/OurApproachSection";

const page = () => {
  return (
    <div className="bg-[#ececec]">
      <HeroSection />
      <NewThisWeekSection />
      <CollectionSection />
      <OurApproachSection />
    </div>
  );
};

export default page;
