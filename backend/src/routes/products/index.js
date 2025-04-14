import { Product } from "../../models/index.js";

const productRoutes = [
  {
    method: "get",
    path: "/products",
    handler: async (req, res) => {
      const products = await Product.find().populate(["category"]);
      return res.status(200).json(products);
    },
  },
  {
    method: "get",
    path: "/products/:id",
    handler: async (req, res) => {
      res.json({ name: "producto 1" });
    },
  },
];

export default productRoutes;
