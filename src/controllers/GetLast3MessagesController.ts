import { Request, response, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

class GetLast3MessageController {
  async handle(req: Request, res: Response) {
    const service = new GetLast3MessagesService;

    try {
      const result = await service.execute();

      return res.json(result);
    } catch(err) {

      return res.status(401).json({ Error: "Cant list 3 last massages"})
    }
  }
}

export { GetLast3MessageController };