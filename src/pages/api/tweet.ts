import { Redis } from "@upstash/redis";
import type { NextApiRequest, NextApiResponse } from "next";
import { client, generateTweet } from "~/twitter";
const redis = new Redis({
  url: "https://eu2-possible-penguin-31584.upstash.io",
  token:
    "AXtgASQgYjg5NDMzN2ItYmExMC00NzVlLThkNDItNTM0ZmQxYTZhZjVlZmZhMmVkN2Y0ZjU1NGE3ZmJkYmNlNDBkZDJlYjljODE=",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = await redis.get("bufferId")
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
