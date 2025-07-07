import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import Habit from "./Habit.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Habit />
  </StrictMode>
);
