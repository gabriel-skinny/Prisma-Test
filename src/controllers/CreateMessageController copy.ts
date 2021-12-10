import { Request, response, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { text } = req.body;
    const { user_id } = req;

    const createMessageService = new CreateMessageService;

    const result = await createMessageService.execute(text, user_id);
  

    return res.json(result);
  }
}

export { CreateMessageController };