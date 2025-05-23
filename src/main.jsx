import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTea from "./components/AddTea";
import UpdateTea from "./components/UpdateTea";
import App from "./App";

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
