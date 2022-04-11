import profileUserService from "../services/profileUser.service";

const profileUserController = (request, response) => {
  const { id } = request.user;
  const user = profileUserService({ id });

  return response.status(200).json(user);
};
export default profileUserController;
