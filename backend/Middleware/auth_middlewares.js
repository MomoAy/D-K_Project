import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import Users from "../Models/users";

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Users.findByPk({
        id: decoded.userId,
        attributes: { exclude: ["password"] },
      });
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("No authorized, no token");
  }
});

export default authMiddleware;
