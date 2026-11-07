import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamil NRI Real Estate | Sri Thirumagal Builders Group | Trusted Remote Property Advisory in Tamil Nadu",
  description:
    "Promoted by Sri Thirumagal Builders Group. Premium RERA & DTCP verified plots, luxury villas, and high-yield apartments across Chennai, Coimbatore, Madurai & Hosur for the global Tamil diaspora. Remote registration, legal due diligence, and 360° property management.",
  keywords: [
    "Tamil NRI Real Estate",
    "Sri Thirumagal Builders Group",
    "Sri Thirumagal Builders NRI",
    "NRI Property in Tamil Nadu",
    "Chennai NRI Flats",
    "Coimbatore NRI Villas",
    "Tamil Diaspora Property Investment",
    "Remote Land Registration Tamil Nadu",
    "DTCP RERA Plots Chennai",
    "NRI Power of Attorney Property India",
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
