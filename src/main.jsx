import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import "./App.css"

import StarRating from "./starRating";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
  </StrictMode>
);
