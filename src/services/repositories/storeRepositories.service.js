import users from "../../database/users";
import bcrypt from "bcryptjs/dist/bcrypt";
import { v4 as uuid } from "uuid";

const storeRepositoriesService = async ({ name, email, password, isAdm }) => {
  const hashPassword = await bcrypt.hash(password, 8);
  const user = users.find((item) => item.email === email);

  if (user) {
    throw new Error("Email already registered");
  } else {
    const newUser = {
      name: name,
      email: email,
      password: hashPassword,
      isAdm: isAdm,
      createdOn: new Date(),
      updatedOn: new Date(),
      id: uuid(),
    };
    users.push(newUser);

    const { id, createdOn, updatedOn } = newUser;
    const dataShow = { name, email, isAdm, createdOn, updatedOn, id };

    return dataShow;
  }
};
export default storeRepositoriesService;
