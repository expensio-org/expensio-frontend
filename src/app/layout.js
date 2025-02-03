import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  // title: "Expensio – Smart, Simple Expense Tracking.",
  title: "Expensio 🚀",
  description: "Manage your finances effortlessly with real-time tracking and insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/helvetica-neue-5"
        />
      </head>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
      <body className="min-h-screen bg-gradient-to-r from-[#09001a] to-[#2d008d] max-w-7xl mx-auto">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
