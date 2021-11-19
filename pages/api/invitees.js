import nc from "next-connect";

import dbConnect from "lib/dbConnect";
import { secured, restricted } from "lib/middleware";
import Code from "models/codes";

const handler = nc();

handler.use(dbConnect, secured, restricted("admin"));

handler.post(async (req, res) => {
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

handler.get(async (req, res) => {
  try {
    const invitees = await Code.find();

    const totalConfirmedAttendees = invitees.reduce((sum, invitee) => {
      if (invitee.attendance === "in-person") {
        return sum + invitee.confirmedGuests.length * 1;
      }
      return sum;
    }, 0);

    res.status(200).json({
      status: "success",
      data: {
        invitees,
        totalConfirmedAttendees,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message,
    });
  }
});

export default handler;
