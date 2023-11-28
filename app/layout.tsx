import "@styles/globals.css";
import type { Metadata } from "next";
import Footer from "@components/footer";
import Header from "@components/header";

export const metadata: Metadata = {
  title: "NextJS App Project",
  description: "Description for the App goes here.",
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
