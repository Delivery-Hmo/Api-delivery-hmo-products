import { Application, Router } from "express";
import { create, list } from "../controllers/product";

const router = Router();

const RouteProducts = (app: Application) => {
  router.get('/list', list);
  router.post('/create', create);

  app.use("/productos", router);
}

export default RouteProducts;