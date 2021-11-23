import nc from "next-connect";
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

import { secured } from "lib/middleware";
import dbConnect from "lib/dbConnect";

const handler = nc();

handler.use(dbConnect, secured).post(async (req, res) => {
  const development = process.env.NODE_ENV === "development";

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: "Kelub & Victoria's House and Honeymoon Fund",
              description:
                "Thank you for supporting Kelub & Victoria through their journey. Your contribution is greatly appreciated!",
              images: ["https://marryingmartyr.ca/imgs/house-purchase.jpg"],
            },
            unit_amount: req.body.amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${
        development
          ? "http://localhost:3000/registry?success=true"
          : "https://marryingmartyr.ca/registry?success=true"
      }`,
      cancel_url: `${
        development
          ? "http://localhost:3000/registry?cancelled=true"
          : "https://marryingmartyr.ca/registry?cancelled=true"
      }`,
    });

    res.status(200).json({
      status: "success",
      data: {
        id: session.id,
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
