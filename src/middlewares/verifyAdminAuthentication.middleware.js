const verifyAdminAutheticationMiddleware = (request, response, next) => {
  const { isAdm, uuid } = request.user;
  const { id } = request.params;

  if (uuid === id) {
    next();
  } else if (!isAdm) {
    response.status(401).json({ message: "Missing admin permissions" });
  } else {
    next();
  }
};
export default verifyAdminAutheticationMiddleware;
