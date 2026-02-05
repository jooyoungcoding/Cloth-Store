"use client";

import { useState } from "react";
import { Camera, ChevronDown } from "lucide-react";

const PersonalInfo = () => {
  return (
    <div className="bg-white rounded-xl border p-6 max-w-3xl font-LeagueSpartan-Light">
      {/* Avatar */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="avatar"
            className="w-24 h-24 rounded-full object-cover"
          />

          {/* Camera icon */}
          <button className="absolute bottom-1 right-1 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
            <Camera size={16} />
          </button>
        </div>
      </div>

      {/* Contact Details */}
      <h3 className="text-lg font-semibold text-black mb-6">Contact Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            defaultValue="Robert Fox"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            defaultValue="robert.fox@email.com"
            readOnly
            className="w-full px-4 py-2 border rounded-lg text-sm bg-gray-100 text-gray-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>

          <div className="flex gap-2">
            {/* Country code select */}
            <div className="relative">
              <select
                className="
          appearance-none
          px-3
          pr-8
          py-2
          border
          rounded-lg
          text-sm
          bg-white
          focus:outline-none
          focus:ring-1
          focus:ring-black
        "
              >
                <option>+84</option>
                <option>+1</option>
                <option>+880</option>
              </select>

              {/* Arrow center */}
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <ChevronDown size={20} />
              </span>
            </div>

            {/* Phone input */}
            <input
              type="tel"
              defaultValue="912 345 678"
              className="flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        </div>

        {/* Currency */}
        {/* Currency */}
        <div>
          <label className="block text-sm font-medium mb-1">Currency</label>
          <div className="relative">
            <select
              className="
        w-full
        px-4
        pr-10
        py-2
        border
        rounded-lg
        text-sm
        bg-white
        appearance-none
        focus:outline-none
        focus:ring-1
        focus:ring-black
      "
            >
              <option>VND (₫)</option>
              <option>USD ($)</option>
              <option>EUR (€)</option>
            </select>

            {/* Arrow CENTER đúng theo input */}
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
              <ChevronDown size={20} />
            </span>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="mt-8">
        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition text-white text-sm font-medium rounded-full">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
