import users from "../database/usersDb";

const updateUserService = ({ email, name, uuid, isAdm, id }) => {
  const userIndex = users.findIndex((user) => user.id === uuid);
  const user = users.find((user) => user.id === uuid);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  const updatedUser = {
    name: name || user.name,
    email: email || user.email,
    id: user.id,
    createdOn: user.createdOn,
    updatedOn: new Date(),
    isAdm: user.isAdm,
  };

  Object.assign(users[userIndex], updatedUser);

  const { updatedOn } = user;

  if (id === uuid) {
    const { name, email, id, isAdm, createdOn } = users[userIndex];
    const dataShow = { name, email, id, createdOn, updatedOn, isAdm };
    return dataShow;
  }

  if (!isAdm) {
    throw new Error("Missing admin permissions");
  }

  return users[userIndex];
};
export default updateUserService;
