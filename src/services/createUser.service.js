import users from "../database/usersDb";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs/dist/bcrypt";

const createUserService = async ({ name, email, password, isAdm }) => {
  const hashedPassword = await bcrypt.hash(password, 8);
  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    createdOn: new Date(),
    updatedOn: new Date(),
    id: uuid(),
  };
  users.push(newUser);

  const user = users.find((user) => user.email === email);

  const { id, createdOn, updatedOn } = user;

  const dataShow = { name, email, isAdm, id, createdOn, updatedOn };

  return dataShow;
};
export default createUserService;
