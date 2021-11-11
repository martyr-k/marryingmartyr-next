import nc from "next-connect";

import dbConnect from "lib/dbConnect";
import Code from "models/codes";
import { secured } from "lib/middleware";

const handler = nc();

handler.use(dbConnect, secured).patch(async (req, res) => {
  try {
    const { song, artist, confirmedGuests } = req.body;
    const code = await Code.findById(req.code._id);

    code.rsvp = true;
    code.confirmedGuests = confirmedGuests;
    if (song || artist) {
      code.song = `${req.body.artist} - ${req.body.song}`;
    }

    await code.save();

    res.status(201).json({ status: "success" });
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: error.message,
    });
  }
});

export default handler;
