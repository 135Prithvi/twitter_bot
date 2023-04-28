import type { NextApiResponse } from "next";
import { Redis } from "@upstash/redis";
import { EUploadMimeType } from "twitter-api-v2";
import { client } from "~/twitter";
import { NextRequest } from "next/server";

const redis = new Redis({
  url: "https://eu2-possible-penguin-31584.upstash.io",
  token:
    "AXtgASQgYjg5NDMzN2ItYmExMC00NzVlLThkNDItNTM0ZmQxYTZhZjVlZmZhMmVkN2Y0ZjU1NGE3ZmJkYmNlNDBkZDJlYjljODE=",
});

export default async (req: NextRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const img_url = await redis.get("img_url");
    const f = await fetch(img_url as unknown as string);
    const img = Buffer.from(await f.arrayBuffer());
    const id = await client.v1.uploadMedia(img, {
      mimeType: EUploadMimeType.Png,
    });
    const bufferId = await redis.set("bufferId", id);
    // console.log(count);
    res.status(200).json(bufferId);
    return new Response(`${bufferId}`);
  }
  if (req.method === "POST") {
    const { img_url } = await req.json();
    const img_url_res = await redis.set("img_url", img_url as string);

    return new Response(`${img_url_res}`);
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};
