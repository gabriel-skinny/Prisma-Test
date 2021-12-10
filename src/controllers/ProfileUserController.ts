import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const service = new ProfileUserService;

    const user = await service.execute(user_id);

    if (!user) {
      return res.status(401).json({ Error: "User does not exists"});
    }

    return res.json(user);
  }
}

export { ProfileUserController };