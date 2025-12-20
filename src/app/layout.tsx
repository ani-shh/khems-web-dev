import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { UserbackProvider, ContactModalProvider } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khems Cleaning | Professional Cleaning Services in Kathmandu",
  description: "Professional residential and commercial cleaning services in Kathmandu, Nepal. Sofa cleaning, carpet shampooing, water tank cleaning, and more.",
  keywords: "cleaning services Kathmandu, sofa cleaning Nepal, office cleaners Lalitpur, professional cleaning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <UserbackProvider>
          <ContactModalProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ContactModalProvider>
        </UserbackProvider>
      </body>
    </html>
  );
}
