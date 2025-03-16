import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import api from "../utils/api";
import useAuthStore from "../store/authStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("Tous les champs sont requis");
      navigate("/");
    }
    

    try {
        const res = await api.post("/login", { email, password });
        const user = res.data;
        setUser(user);
        login();
        navigate("/index");
    } catch (error) {
        toast.error(error?.response?.data?.message || error.message);
        console.log(error?.response?.data?.message || error.message);
    } finally {
        setLoading(false);
        setEmail("");
        setPassword("");
    }
  };

  if(loading) {
    return <div className="w-full h-full flex justify-center items-center"><Loader/></div>
  }

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl backdrop-blur-lg bg-opacity-50 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Connexion
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
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
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity"
            >
              Se connecter
            </button>
          </form>
          <p className="mt-4 text-center text-gray-400">
            Pas encore de compte ?{" "}
            <Link to="/register" className="text-blue-400 hover:text-blue-300">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
