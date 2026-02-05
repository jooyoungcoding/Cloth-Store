"use client";

import { useState, useEffect } from "react";
import { Camera, ChevronDown, User } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { updateUserProfile } from "@/services/user/profile.service";
import toast from "react-hot-toast";
import {
  uploadAvatar,
  updateUserAvatar,
} from "@/services/user/profile.service";

const PersonalInfo = () => {
  const { user, profile, refreshProfile } = useAuthContext();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; phone?: string }>(
    {},
  );

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const validate = () => {
    const newErrors: { username?: string; phone?: string } = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^0\d{9}$/.test(phone)) {
      newErrors.phone =
        "Phone number must be a valid Vietnamese number (10 digits, starts with 0)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (profile) {
      if (profile.username !== username) setUsername(profile.username || "");
      if (profile.phone !== phone) setPhone(profile.phone || "");
      if (profile.email !== email) setEmail(profile.email || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);
  const handleSave = async () => {
    if (!user) return;
    if (!validate()) return;
    try {
      setSaving(true);

      // Upload avatar nếu có file mới
      if (avatarFile) {
        const avatarUrl = await uploadAvatar(user.id, avatarFile);
        await updateUserAvatar(user.id, avatarUrl);
      }

      await updateUserProfile({
        userId: user.id,
        username,
        phone,
      });

      await refreshProfile(user.id);
      toast.success("Update your profile successfully");
      setAvatarFile(null);
    } catch (error: any) {
      console.log("AUTH UID:", user?.id);
      console.log("USER ID PARAM:", user);
      console.error("UPLOAD AVATAR ERROR:", error);

      toast.error(error.message || "Failed to update your profile");
    } finally {
      setSaving(false);
    }
  };

  const getAvatarUrl = () => {
    if (profile?.avatar_url) return profile.avatar_url;
    if (user?.user_metadata?.avatar_url) return user.user_metadata.avatar_url;
    if (user?.user_metadata?.picture) return user.user_metadata.picture;
    return null;
  };

  const getInitialCharacter = (email: string) => email.charAt(0).toUpperCase();

  return (
    <div className="rounded-xl border p-6 max-w-3xl font-LeagueSpartan-Light">
      {/* Avatar */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            {user ? (
              avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : getAvatarUrl(user) ? (
                <img
                  src={getAvatarUrl(user)}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white font-semibold text-xl">
                  {getInitialCharacter(user.email ?? "")}
                </span>
              )
            ) : (
              <User className="text-white" size={18} />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            id="avatar-upload"
            style={{ display: "none" }}
            onChange={handleAvatarChange}
          />
          <button
            className="absolute bottom-1 right-1 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
            onClick={() => document.getElementById("avatar-upload")?.click()}
            type="button"
          >
            <Camera size={16} />
          </button>
        </div>
      </div>

      {/* Contact Details */}
      <h3 className="text-lg font-semibold text-black mb-6">Contact Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full px-4 py-2 border rounded-lg text-sm text-gray-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <div className="flex gap-2">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Currency */}
        {/* Currency */}
        <div>
          <label className="block text-sm font-medium mb-1">Currency</label>
          <div className="relative">
            <select
              className="
        w-full
        px-4
        pr-10
        py-2
        border
        rounded-lg
        text-sm
        appearance-none
        focus:outline-none
        focus:ring-1
        focus:ring-black
      "
            >
              <option>VND (₫)</option>
              <option>USD ($)</option>
              <option>EUR (€)</option>
            </select>

            {/* Arrow CENTER đúng theo input */}
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
              <ChevronDown size={20} />
            </span>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="mt-8">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition text-white text-sm font-medium rounded-full"
        >
          {saving ? "saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
