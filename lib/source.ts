import { docs } from "@/.source";
import { icons } from "lucide-react";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  icon(icon) {
    if (!icon) {
      return;
    }
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
