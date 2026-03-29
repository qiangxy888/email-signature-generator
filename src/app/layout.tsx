import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Email Signature Generator — Professional Templates",
  description:
    "Create a professional HTML email signature in minutes. 6 beautiful templates, live preview, works with Gmail, Outlook & Apple Mail. Free, no sign-up.",
  keywords: ["email signature generator", "free email signature", "email signature template", "HTML email signature", "professional email signature"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
