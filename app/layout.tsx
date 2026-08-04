import { ReactChildren } from '../lib/types';
import ResumeHead from '../components/ResumeHead';

// Root layout for the standalone resume app. When Serubin-net mounts the resume at
// /resume it supplies its own <html>/<body> and renders ResumeHead directly, so this file
// is not used there.
export default function RootLayout({ children }: ReactChildren) {
  return (
    <html lang="en">
      <head>
        <ResumeHead />
      </head>
      <body>{children}</body>
    </html>
  );
}
