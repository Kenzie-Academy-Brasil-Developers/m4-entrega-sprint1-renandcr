import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (request, response, next) => {
  const token1 = request.headers.authorization;

  if (!token1) {
    return response
      .status(401)
      .json({ message: "Missing authorization headers" });
  }
  const token = token1.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "Invalid token" });
    }

    const { isAdm, id } = decoded;

    request.user = {
      isAdm: isAdm,
      id: id,
    };

    next();
  });
};
export default verifyAuthTokenMiddleware;
