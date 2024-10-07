import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ListUsers from "../pages/ListUsers";
import DetailUser from "../pages/DetailUser";
import ProtectedRoute from "./ProtectedRoute";

export const route = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/list-users",
    element: (
      <ProtectedRoute>
        <ListUsers />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/user/:userId",
    element: (
      <ProtectedRoute>
        <DetailUser />,
      </ProtectedRoute>
    ),
  },
];
