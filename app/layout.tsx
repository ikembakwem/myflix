import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onyonyo - Watch TV Shows Online, Watch Movies Online",
  description:
    "Watch Onyonyo movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export default RootLayout;
