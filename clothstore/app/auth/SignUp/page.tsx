"use client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { SignUpUser } from "@/services/auth/auth.service";
import { useState } from "react";
import { googleAuth, facebookAuth } from "@/services/auth/auth.service";

const Page = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
      await SignUpUser(userName, email, password);
      toast.success("Please check your email to verify your account.", {
        duration: 500,
        icon: "📩",
      });
    } catch (error: any) {
      toast.error(error.message || "Sign up failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await googleAuth();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFaceBookAuth = async () => {
    try {
      await facebookAuth();
    } catch (error) {
      console.log(error);
    }
  };

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
          <form onSubmit={handleSignUp} className="mt-8 space-y-5">
            {/* User Name */}
            <div>
              <label className="block text-sm text-black mb-1">User Name</label>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Social buttons */}
          <div className="flex gap-3">
            {/* Google */}
            <button
              onClick={handleGoogleAuth}
              type="button"
              className="w-full flex items-center justify-center gap-3
               border border-gray-300 rounded-lg py-3
               text-sm font-medium text-black
               hover:bg-gray-100 transition"
            >
              <img src="/google.png" alt="Google" className="w-5 h-5" />
              Google
            </button>

            {/* Facebook */}
            <button
              onClick={handleFaceBookAuth}
              type="button"
              className="w-full flex items-center justify-center gap-3
               border border-gray-300 rounded-lg py-3
               text-sm font-medium text-black
               hover:bg-gray-100 transition"
            >
              <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
