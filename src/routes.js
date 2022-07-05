import { Router } from "express";
import { usersController } from "./controllers/usersController.js";

const routes = Router();

routes.get("/users", usersController.getUsers);

routes.post("/users", usersController.createUser);

export { routes };
