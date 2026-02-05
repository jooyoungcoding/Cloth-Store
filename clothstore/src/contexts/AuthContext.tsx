"use client";
import React, { createContext, useContext } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { User } from "@supabase/supabase-js";
import type { UserProfile } from "@/types/userProfile";

type AuthContextType = {
  user: User | null;
  profile: UserProfile | null;
  refreshProfile: (userId: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used inside AuthProvider");
  return ctx;
};