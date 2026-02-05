import { supabase } from "@/lib/supabase";

export type UpdateUserProfilePayload = {
  userId: string;
  username: string;
  phone: string;
};

export type UpdateUserAddressPayload = {
  userId: string;
  country: string;
  city: string;
  address: string;
};

export const updateUserProfile = async ({
  userId,
  username,
  phone,
}: UpdateUserProfilePayload) => {
  const { data, error } = await supabase
    .from("user_profiles")
    .update({
      username,
      phone,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)
    .single();

  if (error) throw error;

  return data;
};

export const updateUserAddress = async ({
  userId,
  country,
  city,
  address,
}: UpdateUserAddressPayload) => {
  const { data, error } = await supabase
    .from("user_profiles")
    .update({
      country,
      city,
      address,
    })
    .eq("id", userId)
    .single();

  if (error) throw error;

  return data;
};

export const uploadAvatar = async (
  userId: string,
  file: File,
): Promise<string> => {
  const fileExt = file.name.split(".").pop();
  const filePath = `${userId}/avatar.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(filePath, file, {
      upsert: true,
      contentType: file.type,
    });

  if (uploadError) throw uploadError;

  const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);

  return data.publicUrl;
};

export const updateUserAvatar = async (userId: string, avatarUrl: string) => {
  const { error } = await supabase
    .from("user_profiles")
    .update({ avatar_url: avatarUrl })
    .eq("id", userId);

  if (error) throw error;
};
