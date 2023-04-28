import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { EUploadMimeType } from "twitter-api-v2";
import { client, generateTweet } from "~/twitter";

export default async function handler(req: NextRequest, res: NextApiResponse) {
  //   await client.v2.tweet(` Done yff.`, {
  //     media:{
  //       media_ids:['1651845416575541249']
  //     }
  //   } );
  if (req.method === "POST") {
    const { img } = await req.json();
    console.log(img)
    const id = await client.v1.uploadMedia(img, {
      mimeType: EUploadMimeType.Png,
    });
    res.status(200).json({ id: `${id}` });
  }
  res.status(200).json({ id: `nothing` });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
