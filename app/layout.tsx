import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beraceria | Fun Race | Pushbike Lampung Academy 2024",
  description: "Beraceria | Fun Race | Pushbike Lampung Academy 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* If you have a PNG file instead, use the following line */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </Head>
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
