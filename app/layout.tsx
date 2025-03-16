import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { SiteConfig } from "@/configs/site.config";
import {
  OrganizationJsonLd,
  WebsiteSchemaJsonLd,
} from "@/components/seo/structured-data";

import "./global.css";
import { PostHogProvider } from "@/components/providers/posthog-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = SiteConfig;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <WebsiteSchemaJsonLd
          siteUrl={SiteConfig.openGraph?.url?.toString() || ""}
        />
        <OrganizationJsonLd
          name="Next.js Starter Template"
          url={SiteConfig.openGraph?.url?.toString() || ""}
          logo={`${SiteConfig.openGraph?.url?.toString()}/logo.png`}
          sameAs={["https://github.com/yaredow/nextjs-starter-template"]}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <PostHogProvider>
          <RootProvider>{children}</RootProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
