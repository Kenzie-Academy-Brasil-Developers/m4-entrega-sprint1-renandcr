import { Router } from "express";
import verifyEmailAvailibility from "../middlewares/verifyEmailAvailibility.middleware";
import createUserController from "../controllers/createUser.controller";
import listUserController from "../controllers/listUser.controller";
import loginUserController from "../controllers/loginUser.controller";
import verifyAuthAdmMiddleware from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import profileUserController from "../controllers/profileUser.controller";

const router = Router();

router.post("", verifyEmailAvailibility, createUserController);
router.post("/login", loginUserController);
router.use(verifyAuthTokenMiddleware);
router.get("/profile", profileUserController);
router.use(verifyAuthAdmMiddleware);
router.get("", listUserController);
router.patch("/:uuid", updateUserController);
router.delete("/:uuid", verifyAuthAdmMiddleware, deleteUserController);

export default router;