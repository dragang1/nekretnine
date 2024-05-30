import { ClerkProvider } from '@clerk/nextjs';

import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={inter.className}>

          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
