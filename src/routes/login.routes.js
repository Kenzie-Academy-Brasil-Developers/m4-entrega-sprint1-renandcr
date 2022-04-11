import loginUserController from "../controllers/loginUser.controller";
import { Router } from "express";

const routerLogin = Router();

routerLogin.post("", loginUserController);

export default routerLogin;
