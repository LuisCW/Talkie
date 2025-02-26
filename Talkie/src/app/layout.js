import "./globals.css";
import { Ubuntu } from "next/font/google";
import { SectionContextProvider } from "@/context/SectionContext";
import Head from "next/head";

export const metadata = {
  title: "Talkie",
  description: "Aprende dialectos de forma rápida y divertida",
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/logo/study.png"/>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`bg-fgray-200 ${ubuntu.variable}`}>
        <SectionContextProvider>{children}</SectionContextProvider>
      </body>
    </html>
  );
}
