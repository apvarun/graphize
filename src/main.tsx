import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "toastify-js/src/toastify.css";
import "react-contexify/dist/ReactContexify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
