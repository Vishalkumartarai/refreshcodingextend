import jwt from "jsonwebtoken";
import errorHandler from "./error.js";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    console.log("Token not found");
    return next(errorHandler(401, "Unauthorized"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log("token not verifi");
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};
