const { promisify } = require("util");
import jwt from "jsonwebtoken";

import Code from "models/codes";

export const secured = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    throw new Error("Please login to access this route.");
  }

  const decodedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const code = await Code.findById(decodedToken.id);
  if (!code) {
    throw new Error("Access denied, code does not exist.");
  }

  req.code = code;

  return next();
};

export const restricted =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.code.role)) {
      throw new Error("Access denied, unauthorized user.");
    }

    return next();
  };
