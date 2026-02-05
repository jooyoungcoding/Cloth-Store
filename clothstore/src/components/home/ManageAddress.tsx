"use client";
import { ChevronDown } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { updateUserAddress } from "@/services/user/profile.service";
import toast from "react-hot-toast";

export default function ManageAddress() {
  const { user, profile } = useAuth();
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (profile) {
      if (profile.address !== address) setAddress(profile.address || "");
      if (profile.city !== city) setCity(profile.city || "");
      if (profile.country != country) setCountry(profile.country || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  const handleSaved = async () => {
    if (!user) return;

    try {
      setSaving(true);

      await updateUserAddress({
        userId: user.id,
        country,
        city,
        address,
      });

      toast.success("Update your address successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to update your address!");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border p-6 max-w-3xl font-LeagueSpartan-Light">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-black ">Manage Address</h2>
        <p className="text-sm text-gray-500">Update your address information</p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black">
        {/* Street Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Street Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your street address"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Country */}

        <div>
          <label className="block text-sm font-medium mb-1">Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter your country"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSaved}
          disabled={saving}
          className="
            px-6
            py-3
            bg-indigo-600
            hover:bg-indigo-700
            transition
            text-white
            text-sm
            font-medium
            rounded-full
          "
        >
          {saving ? "saving..." : "Save Address"}
        </button>
      </div>
    </div>
  );
}
