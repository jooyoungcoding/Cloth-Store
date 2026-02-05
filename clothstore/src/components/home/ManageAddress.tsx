"use client";
import { ChevronDown } from "lucide-react";

export default function ManageAddress() {
  return (
    <div className="bg-white rounded-xl border p-6 max-w-3xl font-LeagueSpartan-Light">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-black ">Manage Address</h2>
        <p className="text-sm text-gray-500">Update your address information</p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black">
        {/* Street Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Street Address
          </label>
          <input
            type="text"
            placeholder="Enter your street address"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Country */}
        {/* Country */}
        <div>
          <label className="block text-sm font-medium mb-1">Country</label>

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
              <option>Vietnam</option>
              <option>United States</option>
              <option>Japan</option>
            </select>

            <span className="pointer-events-none absolute right-3 inset-y-0 flex items-center text-gray-500">
              <ChevronDown size={20} />
            </span>
          </div>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            placeholder="Enter your city"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-end">
        <button
          className="
            px-6
            py-3
            bg-indigo-600
            hover:bg-indigo-700
            transition
            text-white
            text-sm
            font-medium
            rounded-full
          "
        >
          Save Address
        </button>
      </div>
    </div>
  );
}
