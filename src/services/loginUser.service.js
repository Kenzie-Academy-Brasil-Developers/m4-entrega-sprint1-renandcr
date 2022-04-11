import users from "../database/usersDb";
import bcrypt from "bcryptjs/dist/bcrypt";
import jwt from "jsonwebtoken";

const loginUserService = ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Wrong email/password");
  }

  const checkPassword = bcrypt.compareSync(password, user.password);

  if (!checkPassword) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign(
    { email: email, isAdm: user.isAdm, id: user.id },
    "SECRET_KEY",
    {
      expiresIn: "24h",
    }
  );
  return token;
};
export default loginUserService;
