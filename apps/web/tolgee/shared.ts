import { FormatIcu } from "@tolgee/format-icu";
import { DevTools, Tolgee } from "@tolgee/web";

const isDev = process.env.NODE_ENV === "development";

export const ALL_LANGUAGES = ["en-US", "de-DE", "fr-FR", "pt-BR", "pt-PT", "zh-Hant-TW", "hu-HU"];
export const DEFAULT_LANGUAGE = "en-US";

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY || "";
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL || "";

export function TolgeeBase() {
  let tg = Tolgee().use(FormatIcu());

  // Only enable DevTools in development
  if (isDev) {
    tg = tg.use(DevTools());
  }

  return tg.updateDefaults({
    apiKey,
    apiUrl,
    staticData: {
      "en-US": () => import("@/locales/en-US.json"),
      "de-DE": () => import("@/locales/de-DE.json"),
      "fr-FR": () => import("@/locales/fr-FR.json"),
      "pt-BR": () => import("@/locales/pt-BR.json"),
      "pt-PT": () => import("@/locales/pt-PT.json"),
      "zh-Hant-TW": () => import("@/locales/zh-Hant-TW.json"),
      "hu-HU": () => import("@/locales/hu-HU.json"),
    },
  });
}
