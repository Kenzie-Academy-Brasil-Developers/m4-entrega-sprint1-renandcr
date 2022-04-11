import users from "../database/usersDb";

const deleteUserService = ({ uuid }) => {
  const userIndex = users.findIndex((user) => user.id === uuid);

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  users.splice(userIndex, 1);

  return { message: "User deleted with success" };
};
export default deleteUserService;
