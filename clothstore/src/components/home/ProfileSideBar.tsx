"use client";
import React from "react";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Settings,
} from "lucide-react";
import MenuItem from "../layouts/MenuItem";
import { useAuth } from "@/hooks/useAuth";

export type Tab = "personal" | "orders" | "address" | "settings";

type Props = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

const ProfileSideBar = ({ activeTab, setActiveTab }: Props) => {
  const { user, profile } = useAuth();

  const getInitialCharacter = (email: string) => email.charAt(0).toUpperCase();

  const getAvatarUrl = (user: any) =>
    user?.user_metadata?.avatar_url || user?.user_metadata?.picture || null;

  return (
    <aside className="w-[300px] bg-white font-LeagueSpartan-Light">
      {/* Header */}
      <div className="p-5 border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center overflow-hidden">
            {user ? (
              getAvatarUrl(user) ? (
                <img
                  src={getAvatarUrl(user)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white font-semibold">
                  {getInitialCharacter(user.email ?? "")}
                </span>
              )
            ) : (
              <User className="text-white" size={18} />
            )}
          </div>

          <div>
            <p className="text-sm text-black">{profile?.username}</p>
            <p className="font-semibold text-black">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="p-3 space-y-1">
        <MenuItem
          icon={<User size={18} />}
          label="Personal Information"
          active={activeTab === "personal"}
          onClick={() => setActiveTab("personal")}
        />

        <MenuItem
          icon={<Package size={18} />}
          label="My Orders"
          active={activeTab === "orders"}
          onClick={() => setActiveTab("orders")}
        />

        <MenuItem
          icon={<MapPin size={18} />}
          label="Manage Addresses"
          active={activeTab === "address"}
          onClick={() => setActiveTab("address")}
        />

        <MenuItem
          icon={<Settings size={18} />}
          label="Settings"
          active={activeTab === "settings"}
          onClick={() => setActiveTab("settings")}
        />
      </nav>
    </aside>
  );
};

export default ProfileSideBar;
