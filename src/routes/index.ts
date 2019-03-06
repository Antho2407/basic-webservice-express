import * as express from "express";
import { controller } from "../controllers";

class Routes {
  router: express.Router = express.Router()

  constructor() {
    this.config();
  }

  config(): void {
    this.router.post("/", (req: express.Request, res: express.Response) =>
      controller.root(req, res)
    );
  }
}

export const routes = new Routes().router;
