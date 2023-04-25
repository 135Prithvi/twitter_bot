import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "~/twitter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.v2.tweet(
    "VR sports simulations: Users can participate in virtual sports simulations that provide a full-body workout, such as boxing, tennis, or soccer. These simulations can be designed to be both fun and challenging, motivating users to work harder to improve their skills."
  );

  res.status(200).json({ message: " succesfully tweeted" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
