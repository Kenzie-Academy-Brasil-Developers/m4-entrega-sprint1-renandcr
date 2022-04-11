import users from "../database/usersDb";

const verifyEmailAvailibility = (request, response, next) => {
  const { email } = request.body;
  const checkEmail = users.find((user) => user.email === email);

  if (checkEmail) {
    return response.status(400).json({ message: "Email already registered" });
  }

  next();
};
export default verifyEmailAvailibility;
