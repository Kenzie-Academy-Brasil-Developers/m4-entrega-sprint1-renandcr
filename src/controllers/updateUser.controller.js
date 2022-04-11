import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {
  const { id, isAdm } = request.user;
  const { uuid } = request.params;
  const { name, email } = request.body;

  try {
    const user = updateUserService({ name, email, uuid, id, isAdm });
    return response.status(200).json(user);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};
export default updateUserController;
