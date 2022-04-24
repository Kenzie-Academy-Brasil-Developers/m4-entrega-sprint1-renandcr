import { Router } from "express";
import RepositoriesController from "../controllers/repositories.controller";

const loginRouter = Router();

const repositoriesController = new RepositoriesController();

loginRouter.post("", repositoriesController.login);

export default loginRouter;
