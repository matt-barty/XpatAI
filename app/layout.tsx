import type { Metadata } from "next";
import { UserProvider } from "./contexts/UserContext";
import { CountryDataProvider } from "./contexts/CountryDataContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./globals.css";
import { ConversationProvider } from "./contexts/ConversationContext";
import { Analytics } from "@vercel/analytics/next";
import { calFont, inter } from "./fonts";

export const metadata: Metadata = {
  title: "Xpat AI",
  description: "Your AI-powered guide to global mobility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${calFont.variable} ${inter.variable}`}>
      <body className="font-inter">
        <LanguageProvider>
          <UserProvider>
            <CountryDataProvider>
              <ConversationProvider>
                {children}
                <Analytics />
              </ConversationProvider>
            </CountryDataProvider>
          </UserProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
