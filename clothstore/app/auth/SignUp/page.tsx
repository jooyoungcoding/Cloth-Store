import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Left image */}
      <img
        src="/signUp-section.png"
        alt="signUp"
        className="w-full h-full object-cover"
      />

      {/* Right content */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          {/* Title */}
          <h2 className="text-black font-bold text-4xl">
            Create New Account <br />{" "}
            <span className="text-gray-500 font-light text-sm">
              Please enter details
            </span>
          </h2>

          {/* Form */}
          <form className="mt-8 space-y-5">
            {/* User Name */}
            <div>
              <label className="block text-sm text-black mb-1">User Name</label>
              <input
                type="text"
                placeholder="Enter your user name"
                className="w-full rounded-lg border border-gray-500 text-black  px-4 py-3
                           focus:outline-none focus:border-black transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-black mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-lg border border-gray-500 text-black  px-4 py-3
                           focus:outline-none focus:border-black  transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-black mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full rounded-lg border border-gray-500 text-black  px-4 py-3
                           focus:outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="block text-sm text-black mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Your Password"
                className="w-full rounded-lg border border-gray-500 text-black  px-4 py-3
                           focus:outline-none focus:border-black transition"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-black" />
                  <p className="text-sm text-gray-600">
                    I agree to the{" "}
                    <span className="text-black font-medium cursor-pointer">
                      Terms & Conditions
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 rounded-lg py-3
                         bg-black text-white font-medium
                         transition hover:opacity-90 cursor-pointer"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
