import { Router } from "express";
import verifyEmailAvailibility from "../middlewares/verifyEmailAvailibility.middleware";
import createUserController from "../controllers/createUser.controller";
import listUserController from "../controllers/listUser.controller";
import verifyAuthAdmMiddleware from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import profileUserController from "../controllers/profileUser.controller";

const router = Router();

router.post("", verifyEmailAvailibility, createUserController);
router.use(verifyAuthTokenMiddleware);
router.get("/profile", profileUserController);
router.patch("/:uuid", updateUserController);
router.delete("/:uuid", verifyAuthAdmMiddleware, deleteUserController);
router.use(verifyAuthAdmMiddleware);
router.get("", listUserController);

export default router;
