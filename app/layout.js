import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, DM_Sans } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "NFTERs",
  description: "NFT Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
