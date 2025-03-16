import { useState } from "react";
import useAuthStore from "../store/authStore";

function Profile() {
  const { user, updateProfile } = useAuthStore();
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, bio });
    alert("Profil mis à jour !");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-50">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Mon Profil
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user?.email}
            disabled
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-400"
          />
        </div>
        <div>
          <label htmlFor="bio" className="block text-gray-300 mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity"
        >
          Mettre à jour
        </button>
      </form>
    </div>
  );
}

export default Profile;