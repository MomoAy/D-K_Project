import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import api from "../utils/api";
import Loader from "../components/Loader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [last_name, setLast_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      navigate('/register');
    }

    try {
      const res = await api.post("/register", {
        last_name,
        first_name,
        email,
        password,
      });
      toast.success("Incription réussi");
      navigate("/");
    } catch (error) {
        toast.error(error?.response?.data?.message || err.message);
    } finally {
        setLoading(false);
        setEmail("");
        setFirst_name("");
        setLast_name("");
        setPassword("");
        setConfirmPassword("");
    }

  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-50 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Inscription
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nom" className="block text-gray-300 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                className="w-full p-1 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="prenom" className="block text-gray-300 mb-2">
                Prenom
              </label>
              <input
                type="text"
                id="prenom"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                className="w-full p-1 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-1 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-300 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-1 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-300 mb-2"
              >
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-1 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity"
            >
              S'inscrire
            </button>
          </form>
          <p className="mt-4 text-center text-gray-400">
            Déjà un compte ?{" "}
            <Link to="/" className="text-blue-400 hover:text-blue-300">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
