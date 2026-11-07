import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TamilNRIProperty | Buy & Sell Land in Tamil Nadu | Sri Thirumagal Builders Group",
  description:
    "Promoted by Sri Thirumagal Builders Group. \"Honest is key for success\". Complete remote property advisory for the global Tamil diaspora: buy verified DTCP/RERA plots & villas or sell your existing land/ancestral property in Tamil Nadu with Embassy PoA and FEMA repatriation.",
  keywords: [
    "TamilNRIProperty",
    "Tamil NRI Property",
    "Sell land in Tamil Nadu NRI",
    "NRI property selling India",
    "Sri Thirumagal Builders Group",
    "Sri Thirumagal Builders NRI",
    "NRI Property in Tamil Nadu",
    "Chennai NRI Flats",
    "Coimbatore NRI Villas",
    "Tamil Diaspora Property Investment",
    "Remote Land Registration Tamil Nadu",
    "DTCP RERA Plots Chennai",
    "NRI Power of Attorney Property India",
    "Lower TDS Form 13 NRI property sale",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
        {children}
      </body>
    </html>
  );
}
