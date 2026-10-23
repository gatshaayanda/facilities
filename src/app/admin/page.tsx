import type { Metadata } from "next";
import AfrichikoPortal from "@/components/AfrichikoPortal";

export const metadata: Metadata = {
  title: "Facilities operations",
  description: "Manage facilities business details, services, media and customer requests.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AfrichikoPortal page="admin" />;
}
