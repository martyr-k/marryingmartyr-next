import sgMail from "@sendgrid/mail";
import nc from "next-connect";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = nc();

handler.post(async (req, res) => {
  const message = {
    to: "admin@marryingmartyr.ca",
    from: "kelubmartyr@outlook.com",
    subject: `Contact request from: ${req.body.name}`,
    text: req.body.message,
    html: `<p>Contact Information: ${req.body.email}</p><p>Details: ${req.body.message}</p>`,
  };

  try {
    await sgMail.send(message);
    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(401).json({ status: "failure" });
  }
});

export default handler;
