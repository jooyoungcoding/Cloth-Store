import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Left image */}
      <img
        src="/forgotPass-section.png"
        alt="signUp"
        className="w-full h-full object-cover"
      />

      {/* Right content */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          {/* Title */}
          <div className="flex mt-11 mb-8 hover:-translate-x-3 transition-all duration-300">
            {" "}
            <img src="/arrow-left.png" alt="" />
            <Link href={"/auth/SignIn"} className="text-black ">
              Back
            </Link>
          </div>

          <h2 className="text-black font-bold text-4xl">
            Forgot Password <br />{" "}
          </h2>
          <span className="text-gray-500 font-light text-sm">
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </span>
          {/* Form */}
          <form className="mt-8 space-y-5">
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

            {/* Button */}
            <button
              type="submit"
              className="w-full mt-4 rounded-lg py-3
                         bg-black text-white font-medium
                         transition hover:opacity-90 cursor-pointer"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
