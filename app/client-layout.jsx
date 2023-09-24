"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const ClientRootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId="465490051014-b8s4rg323n1e569c5oqnictho64gqu34.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
};

export default ClientRootLayout;
