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
  if (req.method === "POST") {
    // const { img_url } = await req.json();
    const raw_img_url = req.body as any;
    // console.log(JSON.parse(raw_img_url).img_url);
    const img_url: string = JSON.parse(raw_img_url).img_url;
    const title: string = JSON.parse(raw_img_url).title;

    // const img_url_res = await redis.set("img_url", img_url as string);
    const z = await redis.mset({ ["img_url"]: img_url, ["title"]: title });
    const f = await fetch(img_url as unknown as string);
    const img = Buffer.from(await f.arrayBuffer());
    const id = await client.v1.uploadMedia(img, {
      mimeType: EUploadMimeType.Png,
    });
    const bufferId = await redis.set("bufferId", id);
    res.status(200).json(img_url);
    // return new Response(`${img_url}`);
  }
};

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
