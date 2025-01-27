import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LoadingProvider } from "./context/loading-context.jsx";
import { SharedProvider } from "./context/sharedData-context.jsx";

createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <SharedProvider>
      <App />
    </SharedProvider>
  </LoadingProvider>
);
