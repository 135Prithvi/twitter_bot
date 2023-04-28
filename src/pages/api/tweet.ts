import { redis } from "~/redis";
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "~/twitter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = await redis.get("bufferId");
  await client.v2.tweet(` React server component code`, {
    media: {
      media_ids: [id as string],
    },
  });

  res.status(200).json({ message: " succesfully tweeted" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
