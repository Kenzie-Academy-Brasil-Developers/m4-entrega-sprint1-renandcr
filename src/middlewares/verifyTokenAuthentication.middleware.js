import jwt from "jsonwebtoken";

const verifyTokenAutheticationMiddleware = (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response
      .status(401)
      .json({ message: "Missing authorization headers" });
  } else {
    const array = authorization.split(" ");
    const [, token] = array;

    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      if (error) {
        return response.status(401).json({ message: "Invalid token" });
      }

      const { isAdm, uuid } = decoded;

      request.user = { uuid: uuid, isAdm: isAdm };

      next();
    });

    next();
  }
};
export default verifyTokenAutheticationMiddleware;
