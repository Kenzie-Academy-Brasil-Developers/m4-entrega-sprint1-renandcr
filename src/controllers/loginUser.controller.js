import loginUserService from "../services/loginUser.service";

const loginUserController = (request, response) => {
  const { email, password } = request.body;

  try {
    const token = loginUserService({ email, password });
    return response.status(200).json(token);
  } catch (err) {
    response.status(401).json({ message: err.message });
  }
};
export default loginUserController;
