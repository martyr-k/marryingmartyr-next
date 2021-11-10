// import nc from "next-connect";

// const handler = nc();

// handler.post(async (req, res) => {
//   try {
//     const { inviteCode } = req.body;

//     if (!inviteCode) {
//       throw new Error("Please enter a code prior to clicking submit.");
//     }

//     const code = await Code.findOne({
//       identifier: `${inviteCode}KV`,
//     }).select("+inviteCode");

//     if (!code) {
//       throw new Error(
//         "The code you have entered is invalid, please try again."
//       );
//     }

//     if (code && (await code.comparePassword(inviteCode, code.inviteCode))) {
//       if (code.attendance === "virtual") {
//         // - send rsvp confirmation email

//         code.rsvp = true;
//         await code.save();

//         sendToken(200, code, req, res);
//       } else {
//         const data = {
//           id: code._id,
//           attendance: code.attendance,
//           invitedGuests: code.invitedGuests,
//           rsvp: code.rsvp,
//         };

//         res.status(200).json({
//           status: "success",
//           data,
//         });
//       }
//     } else {
//       throw new Error(
//         "The code you have entered is invalid, please try again."
//       );
//     }
//   } catch (error) {
//     res.status(400).json({
//       status: "failure",
//       message: error.message,
//     });
//   }
// });

// export default handler;
