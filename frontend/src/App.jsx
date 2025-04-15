import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductsPage from "./pages";
import Layout from "./components/Layout";
import ProductDetails from "./pages/product";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
