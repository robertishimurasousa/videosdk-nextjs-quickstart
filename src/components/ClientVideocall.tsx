"use client";

import dynamic from "next/dynamic";
import Script from "next/script";

const Videocall = dynamic<{ slug: string; JWT: string }>(
  () => import("@/components/Videocall"),
  { ssr: false }
);

export default function ClientVideocall({
  slug,
  JWT,
}: {
  slug: string;
  JWT: string;
}) {
  return (
    <>
      <Videocall slug={slug} JWT={JWT} />
      <Script src="/coi-serviceworker.js" strategy="afterInteractive" />
    </>
  );
}
