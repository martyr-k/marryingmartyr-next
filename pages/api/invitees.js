import nc from "next-connect";

import dbConnect from "lib/dbConnect";
import { secured, restricted } from "lib/middleware";
import Code from "models/codes";

const handler = nc();

handler.use(dbConnect, secured, restricted("admin")).post(async (req, res) => {
  try {
    const { inviteCode, attendance, invitedGuests, alias } = req.body;

    await Code.create({
      inviteCode,
      attendance,
      invitedGuests,
      identifier: `${inviteCode}KV`,
      alias,
    });

    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message,
    });
  }
});

export default handler;
