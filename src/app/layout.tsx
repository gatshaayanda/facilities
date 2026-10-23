import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PwaRegister from "@/app/pwa-register";
import "./globals.css";
import "./pwa.css";

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Facilities Management | Property Maintenance", template: "%s | Facilities" },
  description: "Facilities management and property maintenance in Botswana. Request support for commercial buildings, schools, retail and hospitality sites.",
  applicationName: "Facilities Management",
  keywords: ["Botswana facilities management", "property maintenance", "commercial cleaning", "building inspections", "preventive maintenance"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: "Facilities Management", title: "Facilities Management | Property Maintenance", description: "Practical facilities management and property maintenance in Botswana. Tell us about your site and request support." },
  twitter: { card: "summary", title: "Facilities Management | Property Maintenance", description: "Practical facilities management and property maintenance in Botswana. Tell us about your site and request support." },
  icons: { icon: "/africhiko-icon.svg", apple: "/africhiko-icon.svg" },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Facilities", statusBarStyle: "default" },
};

export const viewport: Viewport = { themeColor: "#245b8f", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PwaRegister />{children}<Analytics /><SpeedInsights /></body></html>;
}
