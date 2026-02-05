export type UserRole = "user" | "admin";

export interface UserProfile {
  id: string; // uuid

  email: string;

  username: string | null;
  avatar_url: string | null;

  phone: string | null;
  address: string | null;

  role: UserRole;
  is_active: boolean;

  created_at: string;
  updated_at: string;
}
