import axios from "axios";

import { getCookie } from "./cookie";
import useAuthStore from "../store/authStore";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = getCookie("jwt"); // Récupère le token du cookie
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      useAuthStore.setState({ isLoggedIn: false });
      document.cookie = "jwt=; Max-Age=0";
      // toast.error('Votre session a expiré. Veuillez vous reconnecter.'); J'ai commenté par ce que ça générait trop d'erreur
    }
    return Promise.reject(error);
  }
);

export default api;
