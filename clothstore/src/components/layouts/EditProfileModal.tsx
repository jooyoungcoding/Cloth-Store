"use client";

import Field from "../layouts/Field";

type Props = {
  onClose: () => void;
};

const EditProfileModal = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center text-black justify-center">
      {/* Overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />

      {/* Modal */}
      <div className="relative bg-white rounded-lg w-full max-w-md p-6 z-10">
        <h3 className="text-lg font-semibold mb-6">Edit Profile</h3>

        {/* Avatar */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w20 h-20 rounded-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <Field label="Full Name">
            <input
              type="text"
              defaultValue="Robert Fox"
              className="w-full px-3 py-2 border rounded-md text-sm"
            />
          </Field>

          <Field label="Email">
            <input
              type="email"
              value="robert.fox@email.com"
              readOnly
              className="w-full px-3 py-2 border rounded-md text-sm bg-gray-100 text-gray-500"
            />
          </Field>

          <Field label="Phone">
            <input
              type="tel"
              defaultValue="+84 912 345 678"
              className="w-full px-3 py-2 border rounded-md text-sm"
            />
          </Field>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-md"
          >
            Cancel
          </button>

          <button className="px-4 py-2 text-sm bg-black text-white rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
