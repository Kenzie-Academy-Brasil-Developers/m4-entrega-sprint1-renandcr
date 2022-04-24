import users from "../../database/users";
import bcrypt from "bcryptjs/dist/bcrypt";
import jwt from "jsonwebtoken";

const loginRepositoriesService = ({ email, password }) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new Error("Wrong email/ password");
  }
  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword) {
    throw new Error("Wrong email/ password");
  } else {
    const token = jwt.sign({ isAdm: user.isAdm, uuid: user.id }, "SECRET_KEY", {
      expiresIn: "24h",
    });
    return token;
  }
};
export default loginRepositoriesService;
