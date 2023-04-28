import { NextRequest } from "next/server";

import { redis } from "~/redis";
export default async (req: NextRequest) => {
  const url = await redis.get("img_url");
  return new Response(url as unknown as string);
};

export const config = {
  runtime: "experimental-edge",
  api: {
    bodyParser: false,
  },
};
