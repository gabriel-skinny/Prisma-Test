import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController copy";
import { GetLast3MessageController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthentication } from "./middleware/ensureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthentication, new CreateMessageController().handle)
router.get("/messages/last3", new GetLast3MessageController().handle);

router.get("/user", ensureAuthentication, new ProfileUserController().handle);

export { router };