import { Application, Router } from "express";
import { create , list } from "../controllers/category";

const router = Router();

const RouteCategory = (app: Application) => {
  router.post('/create', create);
  router.get('/list', list);

  app.use("/category", router);
}

export default RouteCategory;