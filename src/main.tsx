import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

// Start the mocking conditionally.
if (process.env.NODE_ENV === "development") {
  (async () => {
    const { worker } = await import("./mocks/browser");
    worker.start();
  })();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
