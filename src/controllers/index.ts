import { Request, Response } from "express";
import { getThumbnail } from "./utils"

export class Controller {
  public root(req: Request, res: Response) {
    const filteredUsers = req.body.payload.filter(({count}) => count > 0)
    const response = filteredUsers.map(({name, count, logos}) => ({
      name,
      count,
      thumbnail: getThumbnail(logos)
    }))
    res.status(200).send({response});
  }
}

export const controller = new Controller();
