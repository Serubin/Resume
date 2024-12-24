import { ReactChildren } from '../lib/types';

export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="noindex" />
        <link href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
        <link rel="stylesheet" href="styles/main.css" media="all" />
        <link rel="stylesheet" href="styles/print.css" media="print" />
        <link rel="stylesheet" href="styles/custom.css" media="all" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Roboto:wght@400;700&family=Varela+Round&display=swap" rel="stylesheet" />
      </head>
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
