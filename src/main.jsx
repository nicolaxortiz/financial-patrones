import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme.js";
import Home from "./pages/Home.jsx";
import Financial from "./pages/Financial.jsx";
import Login from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login type="login" />} />
        <Route path="/register" element={<Login type="register" />} />
        <Route path="/financial" element={<Financial />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
