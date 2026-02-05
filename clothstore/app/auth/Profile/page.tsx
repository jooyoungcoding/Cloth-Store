"use client";
import { useState } from "react";
import ProfileSideBar, { Tab } from "@/components/home/ProfileSideBar";
import PersonalInfo from "@/components/home/PersonalInfo";
import MyOrders from "@/components/home/MyOrders";
import ManageAddress from "@/components/home/ManageAddress";
import Settings from "@/components/home/Settings";

const Page = () => {
  const [activeTab, setActiveTab] = useState<Tab>("personal");

  return (
    <div className="container mx-auto font-LeagueSpartan-Light">
      <h2 className="text-5xl font-light mt-5 mb-16 text-black">My Profile</h2>

      <div className="flex gap-8">
        <ProfileSideBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1">
          {activeTab === "personal" && <PersonalInfo />}
          {activeTab === "orders" && <MyOrders />}
          {activeTab === "address" && <ManageAddress />}
          {activeTab === "settings" && <Settings />}
          {activeTab === "orders" && <div>Orders UI</div>}
        </div>
      </div>
    </div>
  );
};

export default Page;
