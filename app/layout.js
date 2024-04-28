import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../context/AuthProvider";
import "@uploadthing/react/styles.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Blog",
  description: "Build by Anas Yakubu",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
