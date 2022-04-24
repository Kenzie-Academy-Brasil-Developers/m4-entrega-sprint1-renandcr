import users from "../../database/users";

const updateRepositoriesService = ({ name, email, id }) => {
  const idParams = id;
  const indexUser = users.findIndex((user) => user.id === idParams);
  const userDb = users.find((user) => user.id === idParams);

  const updatedUser = {
    name: name || userDb.name,
    email: email || userDb.email,
    isAdm: userDb.isAdm,
    updatedOn: new Date(),
    createdOn: userDb.createdOn,
    id: userDb.id,
    password: userDb.password,
  };

  if (indexUser === -1) {
    throw new Error("User not found");
  } else {
    console.log(idParams);

    users[indexUser] = { ...users[indexUser], ...updatedUser };
    const userDbUpdated = users.find((user) => user.id === idParams);

    console.log(idParams);

    const { name, email, updatedOn, createdOn, isAdm, id } = userDbUpdated;
    return { name, email, updatedOn, createdOn, isAdm, id };
  }
};
export default updateRepositoriesService;
