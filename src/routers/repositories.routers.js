import { Router } from "express";
import RepositoriesController from "../controllers/repositories.controller";
import verifyTokenAutheticationMiddleware from "../middlewares/verifyTokenAuthentication.middleware";
import verifyAdminAutheticationMiddleware from "../middlewares/verifyAdminAuthentication.middleware";

const router = Router();

const repositoriesController = new RepositoriesController();

router.post("", repositoriesController.store);

router.use(verifyTokenAutheticationMiddleware);

router.get(
  "",
  verifyTokenAutheticationMiddleware,
  verifyAdminAutheticationMiddleware,
  repositoriesController.showAll
);

router.get("/profile", repositoriesController.showProfile);
router.patch(
  "/:id",
  verifyAdminAutheticationMiddleware,
  repositoriesController.update
);
router.delete(
  "/:id",
  verifyAdminAutheticationMiddleware,
  repositoriesController.delete
);

export default router;
