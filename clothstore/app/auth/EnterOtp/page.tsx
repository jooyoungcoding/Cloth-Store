"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";

const Page = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* ✅ LEFT IMAGE — GIỮ NGUYÊN */}
      <img
        src="/OTP-section.png"
        alt="OTP"
        className="w-full h-full object-cover"
      />

      {/* RIGHT CONTENT */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          {/* Back */}
          <div className="flex items-center gap-2 mb-10 hover:-translate-x-2 transition">
            <img src="/arrow-left.png" alt="" />
            <Link href="/auth/SignIn" className="text-black">
              Back
            </Link>
          </div>

          {/* Title */}
          <h2 className="text-black font-bold text-4xl mb-3">Enter OTP</h2>
          <p className="text-gray-500 text-sm mb-8">
            We have shared a code to your registered email address <br />
            <span className="font-medium">robertfox@example.com</span>
          </p>

          {/* ✅ OTP FORM */}
          <form className="space-y-8">
            {/* OTP Inputs */}
            <div className="flex gap-7.5 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                  type="text"
                  value={digit}
                  maxLength={1}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-14 h-14 text-center text-xl font-semibold
               border rounded-lg border-gray-300 text-black
               focus:outline-none focus:border-black"
                />
              ))}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg
                         bg-black text-white font-medium
                         hover:opacity-90 transition"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
