import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import AboutUs from "./pages/AboutUs";
import Search from "./pages/Search";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Search />} />
        <Route path="search" element={<Search />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route
          path="*"
          element={
            <main className="p-4">
              <p>There's nothing here: 404!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
