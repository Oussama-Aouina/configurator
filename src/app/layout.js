import { Inter } from "next/font/google";

import { Providers } from "../context/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Configurator",
  description: "Easy way to simulate your dream house",
  icons: {
    apple: ["/favicons/apple-icon.png"], // Fix: Add the 'appleTouchIcon' property with the correct value
    icon: ["/favicons/favicon.ico?v4"],
    shortcut: ["/favicons/apple-icon.png?v4"],
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
