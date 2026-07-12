import { createRoot } from "react-dom/client";
import "../style.css";
import "../effects.js";
import "../scrollfx.js";
import "../bg3d.js";
import "../image-slot.js";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
