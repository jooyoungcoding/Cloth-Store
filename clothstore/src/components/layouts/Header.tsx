"use client";

import React from "react";
import {
  MessageCircleMore,
  User,
  Sun,
  SunMoon,
  UserPlus,
  LogIn,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import { logOutUser } from "@/services/auth/auth.service";
import { span } from "framer-motion/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
// ...existing code...

const Header = () => {
  const [isIconMode, setIsIconMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, profile, loading } = useAuth();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        e.target &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathName]);

  const getInitialCharacter = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const getAvatarUrl = (user: any) => {
    return (
      user?.user_metadata?.avatar_url || user?.user_metadata?.picture || null
    );
  };

  const handleLogOut = async () => {
    try {
      await logOutUser();
      setIsOpen(false);
      router.push("/");
      toast.success("Sign Out Successfully");
    } catch (error) {}
  };

  return (
    <header className=" bg-[#ececec] p-7 relative">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center gap-6">
          <nav className="text-black text-lg gap-6 flex font-medium font-LeagueSpartan-Light">
            {" "}
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <Link href="/Shop" className="hover:text-gray-700">
              Products
            </Link>
            <Link href="./Collections" className="hover:text-gray-700">
              Collections
            </Link>
            <Link href="./New" className="hover:text-gray-700">
              New
            </Link>
          </nav>
        </div>

        <Link
          href="/"
          className="absolute left-1/2 translate-x-1/2 cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={300}
            className="w-9 h-9"
          />
        </Link>

        <div className="ml-auto flex items-center gap-6 ">
          <button
            onClick={() => setIsIconMode(!isIconMode)}
            className=" text-black hover:cursor-pointer mt-2"
          >
            <span
              className={`inline-block transition-all duration-300 ${
                !isIconMode
                  ? "text-black rotate-180 scale-105"
                  : "text-white rotate-360 scale-105"
              }`}
            >
              {!isIconMode ? (
                <Sun size={25} className="text-black" />
              ) : (
                <SunMoon size={25} />
              )}
            </span>
          </button>

          <button className="px-4 py-2 border-2 bg-black rounded-3xl text-white cursor-pointer hover:bg-gray-800 transition-colors duration-300">
            Cart
          </button>

          <button className="w-10 h-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            {" "}
            <Image
              src="/icon-heart.png"
              width={300}
              height={300}
              alt="icon heart"
            />
          </button>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-black border-3 text-black hover:scale-105 cursor-pointer transition-all duration-300"
          >
            <MessageCircleMore size={18} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 rounded-full bg-black
             flex items-center justify-center
             cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {user ? (
              getAvatarUrl(user) ? (
                <img
                  src={getAvatarUrl(user)}
                  alt="avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-white font-semibold text-lg">
                  {getInitialCharacter(user.email ?? "")}
                </span>
              )
            ) : (
              <User className="text-white" size={18} />
            )}
          </button>

          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute top-full right-16  w-56 border bg-white rounded-2xl overflow-hidden shadow-lg z-50"
            >
              {!user ? (
                <div>
                  {" "}
                  <>
                    <Link
                      href="/auth/SignUp"
                      className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 font-LeagueSpartan-Light text-black"
                    >
                      <UserPlus size={20} />
                      Sign Up
                    </Link>
                    <Link
                      href="/auth/SignIn"
                      className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 font-LeagueSpartan-Light text-black"
                    >
                      <LogIn size={20} />
                      Sign In
                    </Link>
                  </>
                </div>
              ) : (
                <>
                  {" "}
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-semibold text-black">
                      {profile?.username}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>
                  <Link
                    href="/auth/Profile"
                    className="flex gap-2 items-center px-4 py-2 hover:bg-gray-200 font-LeagueSpartan-Light text-black"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="flex gap-2 w-full cursor-pointer items-center px-4 py-2 hover:bg-gray-200 font-LeagueSpartan-Light text-black"
                  >
                    Log out
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
