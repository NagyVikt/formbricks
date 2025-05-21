// app/layout.tsx or app/RootLayout.tsx

import { SentryProvider } from "@/app/sentry/SentryProvider";
import { IS_PRODUCTION, SENTRY_DSN } from "@/lib/constants";
import { TolgeeNextProvider } from "@/tolgee/client";
import { getLocale } from "@/tolgee/language";
import { getTolgee } from "@/tolgee/server";
import { TolgeeStaticData } from "@tolgee/react";
import { Metadata } from "next";
import React from "react";
import "../modules/ui/globals.css";

// Metadata for Next.js
// Updated metadata with Hungarian translations
export const metadata: Metadata = {
  title: {
    template: "%s | Formbricks HU", // Updated template
    default: "Formbricks HU", // Updated default title
  },
  description: "Kérdőív létrehozó PLatform", // Hungarian: "Open-Source Survey Suite"
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // 1. Get locale (SSR-safe)
  const locale = await getLocale();

  // 2. Init Tolgee and pre-load required translation data
  const tolgee = await getTolgee(locale); // Pass locale to make sure it's for the right language
  const staticData = await tolgee.loadRequired();

  return (
    <html lang={locale} translate="no">
      <body className="flex h-dvh flex-col transition-all ease-in-out">
        <SentryProvider sentryDsn={SENTRY_DSN} isEnabled={IS_PRODUCTION}>
          <TolgeeNextProvider language={locale} staticData={staticData as TolgeeStaticData}>
            {children}
          </TolgeeNextProvider>
        </SentryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
