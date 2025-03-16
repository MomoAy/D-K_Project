import { Navigate } from "react-router";
import useAuthStore from "../store/authStore";
import Login from "../pages/Login";

function PrivateRoute({ element: Element }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? <Element /> : <Navigate to='/' replace />
}

export default PrivateRoute;