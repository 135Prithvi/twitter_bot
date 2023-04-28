import { TwitterApi } from "twitter-api-v2";
import { env } from "./env.mjs";
export const tclient = new TwitterApi({
  // these two values come from your app's API keys

  appKey: "E8zRnxDtGL9jDALxVunpJZRDF",
  appSecret: "RPfCryYCRgiLVKD7X96POcU3sslO01nNoSdx0qvzpYEpsO9lgG",

  // these two values come from the user's access tokens
  accessToken: "1651823398748577794-4UVkClc7w1qRFl3EfeiSrQKbiKXrGp",
  accessSecret: "OzJlxRExpdHtuH3SbMK1M8Ww5XuQRxANDG0ZGUUEVDMfd",

});
export const client = tclient.readWrite
export const generateTweet = () => {
  const arrayPrompts = [
    "fitness",
    "Vr",
    "Frontend development",
    "React JS",
    "Tailwind Css",
    "Gym",
    "Vs code",
    "Chat GPT",
    "OpenAi",
    "Midjourney copywrite issue",
  ];

  // Get two random indexes from the array
  const randomIndex1 = Math.floor(Math.random() * arrayPrompts.length);
  let randomIndex2 = Math.floor(Math.random() * arrayPrompts.length);

  // Make sure randomIndex2 is different from randomIndex1
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * arrayPrompts.length);
  }

  // Get the two random items from the arrayPrompts
  const randomItem1 = arrayPrompts[randomIndex1];
  const randomItem2 = arrayPrompts[randomIndex2];

  console.log(randomItem1, randomItem2);
  return `Brainstorm some ideas combining ${randomItem1 ?? ""} and ${
    randomItem2 ?? ""
  }`;
};
