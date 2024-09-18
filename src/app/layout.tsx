import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamble",
  description:
    "HI, I'M GAMBLE\n" +
    "INSPIRED BY AH GAMBLE, HERE TO BRING SMILES AND SWAY INTO YOUR HEARTS!\n" +
    "I AM JUST A SWINGIN' ORANGUTAN!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
