import { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

const Document = () => (
  <Html>
    <Head />
    <body>
      <ColorModeScript />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
