import users from "../database/usersDb";

const verifyAuthAdmMiddleware = (request, response, next) => {
  const { uuid } = request.params;
  const { isAdm, id } = request.user;

  const userIndex = users.findIndex((user) => user.id === uuid);

  if (id === uuid) {
    users.splice(userIndex, 1);
    return response.status(401).json({ message: "User deleted with success" });
  }
  if (!isAdm) {
    return response.status(401).json({ message: "Missing admin permissions" });
  }
  next();
};
export default verifyAuthAdmMiddleware;
