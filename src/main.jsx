import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// importing Bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
//  import bootstrap from '../src/css/bootstrap.css';

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
