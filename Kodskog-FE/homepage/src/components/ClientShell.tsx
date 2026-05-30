"use client";
import NavBar from "./NavBar";
import { Analytics } from "@vercel/analytics/react";

// Isolates client-only components (NavBar, Analytics) so layout.tsx
// can remain a server component and export metadata for SEO.
export default function ClientShell() {
  return (
    <>
      <Analytics />
      <NavBar />
    </>
  );
}
