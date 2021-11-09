import nc from "next-connect";

import dbConnect from "lib/dbConnect";
import Code from "models/codes";
import { sendToken } from "utils/helpers";

const handler = nc();

handler.use(dbConnect).post(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide an email address and/or password.");
    }

    const code = await Code.create({
      email,
      password,
    });

    sendToken(201, code, req, res);
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message,
    });
  }
});

export default handler;
