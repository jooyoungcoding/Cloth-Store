"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Tab = "general" | "billings" | "password";

export default function Settings() {
  const [isEditingBilling, setIsEditingBilling] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("general");

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="space-y-6 text-black">
            {/* Language */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Language</p>
                <p className="text-xs text-gray-500">
                  Choose your preferred language
                </p>
              </div>

              <div className="relative w-[220px]">
                <select
                  className="
        w-full
        px-4
        pr-12
        py-2
        border
        rounded-lg
        text-sm
        appearance-none
        focus:outline-none
      "
                >
                  <option>English</option>
                  <option>Vietnamese</option>
                </select>

                <span className="pointer-events-none absolute right-5 inset-y-0 flex items-center text-gray-500">
                  <ChevronDown size={20} />
                </span>
              </div>
            </div>

            {/* Timezone */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Timezone</p>
                <p className="text-xs text-gray-500">Your local timezone</p>
              </div>

              <div className="relative w-[300px]">
                <select
                  className="
        w-full
        px-4
        pr-12
        py-2
        border
        rounded-lg
        text-sm
        appearance-none
        focus:outline-none
      "
                >
                  <option>GMT +7 (Asia/Ho_Chi_Minh)</option>
                  <option>GMT +0 (UTC)</option>
                </select>

                <span className="pointer-events-none absolute right-5 inset-y-0 flex items-center text-gray-500">
                  <ChevronDown size={20} />
                </span>
              </div>
            </div>
          </div>
        );

      case "billings":
        return (
          <div className="space-y-6 max-w-lg text-black">
            {!isEditingBilling ? (
              <>
                {/* View mode */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Payment Method</p>
                    <p className="text-xs text-gray-500">
                      Default payment method
                    </p>
                  </div>
                  <span className="text-sm text-gray-700">Visa •••• 4242</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Billing Address</p>
                    <p className="text-xs text-gray-500">Used for invoices</p>
                  </div>
                  <span className="text-sm text-gray-700">
                    Ho Chi Minh City, Vietnam
                  </span>
                </div>

                <button
                  onClick={() => setIsEditingBilling(true)}
                  className="px-6 py-3 bg-black text-white rounded-full text-sm w-fit"
                >
                  Edit Billing
                </button>
              </>
            ) : (
              <>
                {/* Edit mode */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="**** **** **** 4242"
                    className="w-full px-4 py-2 border rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Robert Fox"
                    className="w-full px-4 py-2 border rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Billing Address
                  </label>
                  <input
                    type="text"
                    placeholder="Ho Chi Minh City, Vietnam"
                    className="w-full px-4 py-2 border rounded-lg text-sm"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsEditingBilling(false)}
                    className="px-6 py-3 border rounded-full text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsEditingBilling(false)}
                    className="px-6 py-3 bg-black text-white rounded-full text-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </>
            )}
          </div>
        );

      case "password":
        return (
          <div className="space-y-5 max-w-md text-black">
            <div>
              <label className="block text-sm font-medium mb-1">
                Current Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg text-sm text-black"
              />
            </div>

            <button className="px-6 py-3 bg-black text-white rounded-full text-sm">
              Update Password
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl border max-w-3xl ">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b">
        <h2 className="text-4xl font-semibold text-black">Settings</h2>
        <p className="text-sm text-gray-500">Manage your account preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 px-6 border-b text-sm font-medium">
        {(["general", "billings", "password"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 capitalize relative transition
              ${
                activeTab === tab
                  ? "text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black"
                  : "text-gray-400 hover:text-black"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">{renderContent()}</div>
    </div>
  );
}
