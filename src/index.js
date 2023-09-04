import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Facper from "./Facper";
import Form from "./Form";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<Facper />} />
      <Route path="/form/:id" element={<Form />} />
    </Routes>
  </BrowserRouter>
);
