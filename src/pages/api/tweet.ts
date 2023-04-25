import type { NextApiRequest, NextApiResponse } from "next";
import { client, generatePrompt } from "~/twitter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.v2.tweet(
    `${generatePrompt} provide a full-body workout, such as boxing, ${generatePrompt }.`
  );

  res.status(200).json({ message: " succesfully tweeted" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
