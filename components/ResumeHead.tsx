/* eslint-disable @next/next/no-page-custom-font */
import '../styles/resume.scss';

// Head content shared by both places this resume renders: as its own app, where
// app/layout.tsx is the root layout, and mounted at /resume by Serubin-net, where it is a
// nested layout under that site's root. Only the <html>/<body> wrapper differs between the
// two, so everything else lives here.
//
// charSet and viewport are deliberately absent — Next emits both by default, and declaring
// them here produced a duplicate charSet and a second, conflicting viewport in the embedded
// page.
export default function ResumeHead() {
  return (
    <>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="robots" content="noindex" />
      <link href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Roboto:wght@400;700&family=Varela+Round&display=swap" rel="stylesheet" />
    </>
  );
}
