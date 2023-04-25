import { TwitterApi } from "twitter-api-v2";

export const client = new TwitterApi({
  // these two values come from your app's API keys
  
  appKey: "jftGjujW7hW50HBuNtcxKhS95",
  appSecret: "FHf6jVgwfHisa2DtPYj5lbsxA8Cnw5G5nEavMm7VLyeimYGbSR",

  // these two values come from the user's access tokens
  accessToken: "1300661071015936001-bHBMrkDp0e0EpMJGPfUwCCZOFhuH7G",
  accessSecret: "wbGGOhdvWtCrJ1ZHM72mjbT33aD9Yjob5EziJoloFvPSW",
});

export const generatePrompt = ()=>{
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
  return `Brainstorm some ideas combining ${randomItem1} and ${randomItem2}`
}

