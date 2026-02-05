import { supabase } from "@/lib/supabase";
import { UserProfile } from "@/types/userProfile";

export const SignUpUser = async (
  username: string,
  email: string,
  password: string,
) => {
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/verify`,
      data: {
        username,
      },
    },
  });
  if (error) throw error;

  return data;
};

export const signInUser = async (email: string, password: string) => {
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
};

export const logOutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
};
