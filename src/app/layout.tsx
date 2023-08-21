import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/sideBar/SideBar";
import Topbar from "@/components/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashborad",
  description: "Business Dashborad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="flex">
          <SideBar />
          <div className="px-4 flex-1">
            <Topbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
