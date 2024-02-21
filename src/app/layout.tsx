import type { Metadata } from "next";
import { Noto_Sans_Thai, Roboto } from "next/font/google";
import "@/styles/Main.scss";
import Header from "@/components/common/Header";

const nts = Noto_Sans_Thai({
  weight: ["400", "500", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pantip - Redesign",
  description: "By Watee Kamrungsee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nts.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
