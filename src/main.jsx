import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoadingProvider } from "./context/loading-context.jsx";

createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
);
