import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#e6e6e6] text-black">
      <div className="container mx-auto min-h-screen flex items-center justify-center relative">
        {/* LEFT */}
        <div className="absolute left-12 top-24 text-xs text-gray-600 space-y-12 uppercase tracking-widest">
          <div className="space-y-4">
            <p className="text-gray-400">Info</p>
            <ul className="space-y-1">
              <li>Pricing /</li>
              <li>About /</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400">Languages</p>
            <ul className="space-y-1">
              <li>ENG /</li>
              <li>ESP /</li>
              <li>SVE</li>
            </ul>
          </div>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center">
          <div className="flex items-center ">
            <Image
              src="/logo.png"
              alt="logo"
              width={400}
              height={400}
              className="w-15 h-15"
            />
            <span className="text-6xl font-bold tracking-tight">XIV</span>
          </div>
          <span className="text-6xl font-bold tracking-tight">QR</span>
        </div>

        {/* RIGHT */}
        <div className="absolute right-12 top-24 text-xs text-gray-600 uppercase tracking-widest text-right space-y-4">
          <p className="text-gray-400">Technologies</p>
          <p className="flex items-center gap-3 justify-end">
            Near-field communication
          </p>
        </div>

        {/* BOTTOM */}
        <div className="absolute bottom-6 left-0 w-full flex items-center justify-between px-12 text-xs text-gray-500">
          <span className="mx-auto">© 2024 — copyright</span>
          <span className="absolute right-12">privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
