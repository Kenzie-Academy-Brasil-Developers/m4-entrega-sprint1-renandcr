import users from "../../database/users";

const deleteRepositoriesService = ({ id }) => {
  const indexUser = users.findIndex((user) => user.id === id);

  if (indexUser === -1) {
    throw new Error("User not found");
  }

  users.splice(indexUser, 1);

  return { message: "User deleted with success" };
};
export default deleteRepositoriesService;
