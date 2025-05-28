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
    loader: () => fetch("https://porcelain-teapot-server.vercel.app/tea"),
  },
  {
    path: "addTea",
    element: <AddTea></AddTea>,
  },
  {
    path: "updateTea/:id",
    element: <UpdateTea></UpdateTea>,
    loader: ({ params }) =>
      fetch(`https://porcelain-teapot-server.vercel.app/tea/${params.id}`),
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
    loader: () => fetch("https://porcelain-teapot-server.vercel.app/users"),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
