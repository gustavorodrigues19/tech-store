import categoryRoutes from "./categories/index.js";
import productRoutes from "./products/index.js";
import authRoutes from "./auth/index.js";

const routes = [...productRoutes, ...categoryRoutes, ...authRoutes];

export default function loadRoutes(app) {
  routes.forEach((route) => {
    app[route.method](route.path, route.handler);
  });
}
