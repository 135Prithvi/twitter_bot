import { redis } from "~/redis";
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "~/twitter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const i = await redis.mget("bufferId" , "title");
  await client.v2.tweet(`${i[1]}`, {
    media: {
      media_ids: [i[0] as string],
    },
  });

  res.status(200).json({ message: " succesfully tweeted" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
