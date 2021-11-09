import jwt from "jsonwebtoken";

import Code from "models/codes";

export const parseCookies = (req) => {
  const list = {};
  const cookies = req.headers.cookie;

  cookies &&
    cookies.split(";").forEach((cookie) => {
      const parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
    });

  return list;
};

const generateToken = (codeId) => {
  return jwt.sign({ id: codeId }, process.env.JWT_SECRET, {
    expiresIn: `${process.env.JWT_EXPIRES_IN}m`,
  });
};

const getRefreshToken = async (codeId) => {
  const code = await Code.findById(codeId);
  const token = code.generateRefreshToken();
  await code.save();

  return token;
};

export const sendToken = async (statusCode, code, req, res) => {
  res.setHeader(
    "Set-Cookie",
    `refreshToken=${await getRefreshToken(code._id)}; HttpOnly; ${
      process.env.NODE_ENV === "production" ? "Secure" : ""
    }; SameSite=Lax; Max-Age=${
      process.env.REFRESH_TOKEN_EXPIRES_IN * 24 * 60 * 60 * 1000
    }`
  );
  res.status(statusCode).json({
    status: "success",
    token: {
      value: generateToken(code._id),
      expiry: Date.now() + process.env.JWT_EXPIRES_IN * 60 * 1000,
    },
  });
};
