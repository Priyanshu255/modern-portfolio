import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
// import { Righteous } from "next/font/google";
// import { Tilt_Neon } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Audiowide({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyanshu Pandit",
  description: "Hi There! This is my portfolio website.",
  applicationName: "Priyanshu Pandit"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="/jsm-logo.png" sizes="any" /> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/image/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/image/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/image/favicon-16x16.png"
        />
        <link rel="manifest" href="/image/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
