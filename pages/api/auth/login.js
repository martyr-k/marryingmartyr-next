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

    const code = await Code.findOne({
      email,
    }).select("+password");

    if (!code) {
      throw new Error("Incorrect email or password, please try again.");
    }

    if (code && (await code.comparePassword(password, code.password))) {
      sendToken(200, code, req, res);
    } else {
      throw new Error("Incorrect email or password, please try again.");
    }
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message,
    });
  }
});

export default handler;
