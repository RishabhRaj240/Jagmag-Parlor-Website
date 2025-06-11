import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jagmag Parlour",
  description: "",
  generator: "",
  icons: {
    icon: "/favicon.png", // path to your favicon in the /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
