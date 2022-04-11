import deleteUserService from "../services/deleteUser.service";
import verifyAuthAdmMiddleware from "../middlewares/verifyAuthAdm.middleware";

const deleteUserController = (request, response) => {
  const { uuid } = request.params;

  try {
    const user = deleteUserService({ uuid });
    response.status(200).json(user);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};
export default deleteUserController;
