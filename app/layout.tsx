import "globals/styles.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Heooow",
  description: "Coded by the holy Nickz :)",
  icons: "/favicon.png",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>{children}</body>
    </html>
  );
}
