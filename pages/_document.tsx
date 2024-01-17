/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href='https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css' rel='stylesheet' />
        <link rel='stylesheet' href='styles/main.css' media='all' />
        <link rel='stylesheet' href='styles/print.css' media='print' />
        <link rel='stylesheet' href='styles/custom.css' media='all' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Roboto:wght@400;700&family=Varela+Round&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
