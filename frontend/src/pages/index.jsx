import React, { useEffect } from "react";
import Product from "../components/Product";
import { getProducts } from "../services/products";

export default function ProductsPage() {
  useEffect(() => {
    getProducts().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
}
