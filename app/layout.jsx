"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pre-project",
  description: "Hamta Pre-cooperation Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId="465490051014-b8s4rg323n1e569c5oqnictho64gqu34.apps.googleusercontent.com">
        <body>{children}</body>
      </GoogleOAuthProvider>
    </html>
  );
}
