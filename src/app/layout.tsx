import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PwaRegister from "@/app/pwa-register";
import "./globals.css";
import "./pwa.css";

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://facilities.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Facilities Management | Property Maintenance", template: "%s | Africhiko" },
  description: "Facilities management and property maintenance in Botswana. Request support for commercial buildings, schools, retail and hospitality sites.",
  applicationName: "Facilities Management",
  keywords: ["Botswana facilities management", "property maintenance", "commercial cleaning", "building inspections", "preventive maintenance"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: "Facilities Management", title: "Africhiko | Welding & Steel Fabrication", description: "Facilities management and property maintenance in Botswana. Tell us about your site and request service support." },
  twitter: { card: "summary", title: "Africhiko | Welding & Steel Fabrication", description: "Welding and steel fabrication in Botswana. Tell us about your project and request a quotation." },
  icons: { icon: "/africhiko-icon.svg", apple: "/africhiko-icon.svg" },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Facilities", statusBarStyle: "default" },
};

export const viewport: Viewport = { themeColor: "#245b8f", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PwaRegister />{children}<Analytics /><SpeedInsights /></body></html>;
}
