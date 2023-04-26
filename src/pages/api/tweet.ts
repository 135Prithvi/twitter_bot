import type { NextApiRequest, NextApiResponse } from "next";
import { client, generateTweet } from "~/twitter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.v2.tweet(`${generateTweet()}. Done Professionally.`);

  res.status(200).json({ message: " succesfully tweeted" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
