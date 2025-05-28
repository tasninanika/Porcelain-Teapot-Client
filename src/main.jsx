import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTea from "./components/AddTea";
import UpdateTea from "./components/UpdateTea";
import App from "./App";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AuthProvider from "./providers/AuthProvider";
import Users from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/tea"),
  },
  {
    path: "addTea",
    element: <AddTea></AddTea>,
  },
  {
    path: "updateTea/:id",
    element: <UpdateTea></UpdateTea>,
    loader: ({ params }) => fetch(`http://localhost:5000/tea/${params.id}`),
  },
  {
    path: "signin",
    element: <Signin></Signin>,
  },
  {
    path: "signup",
    element: <Signup></Signup>,
  },
  {
    path: "users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
