import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./pages/Main.jsx";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

import "./assets/scss/nullstyle.scss";
import "./assets/scss/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contacts",
    element: <Contacts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
