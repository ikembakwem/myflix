import "@styles/globals.css";
import type { Metadata } from "next";
import Footer from "@components/footer";
import { Header } from "@components/header";

export const metadata: Metadata = {
  title: "Onyonyo - Watch TV Shows Online, Watch Movies Online",
  description:
    "Watch Onyonyo movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;
