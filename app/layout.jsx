import "./globals.css";
import ClientRootLayout from "./client-layout";

export const metadata = {
  title: "Pre-project",
  description: "Hamta Pre-cooperation Project",
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children} </ClientRootLayout>;
}
