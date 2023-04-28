import { type AppType } from "next/dist/shared/lib/utils";
import { Toaster } from "react-hot-toast";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>  <Toaster position="bottom-center" /><Component {...pageProps} /></>;
};

export default MyApp;
