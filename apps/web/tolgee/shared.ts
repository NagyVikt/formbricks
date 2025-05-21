// Added Tolgee Configuration Code
import { FormatIcu } from "@tolgee/format-icu";
import { DevTools, Tolgee } from "@tolgee/web";

// It's good practice to ensure environment variables are handled,
// especially in a test environment. They might be undefined if not set.
// For tests, you might want to mock process.env or provide default values.
const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY || "test_api_key";
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL || "https://test.tolgee.io";

export const ALL_LANGUAGES = ["en-US", "de-DE", "fr-FR", "pt-BR", "pt-PT", "zh-Hant-TW", "hu-HU"]; // Added hu-HU here as well for consistency

export const DEFAULT_LANGUAGE = "en-US";

export function TolgeeBase() {
  return Tolgee()
    .use(FormatIcu())
    .use(DevTools()) // DevTools might not be ideal for all test environments, consider conditional usage.
    .updateDefaults({
      apiKey,
      apiUrl,
      staticData: {
        "en-US": () => import("@/locales/en-US.json"),
        "de-DE": () => import("@/locales/de-DE.json"),
        "fr-FR": () => import("@/locales/fr-FR.json"),
        "pt-BR": () => import("@/locales/pt-BR.json"),
        "pt-PT": () => import("@/locales/pt-PT.json"),
        "zh-Hant-TW": () => import("@/locales/zh-Hant-TW.json"),
        "hu-HU": () => import("@/locales/hu-HU.json"), // Added Hungarian locale import
      },
      // Ensure all languages in ALL_LANGUAGES have a corresponding entry in staticData
      // or are handled by Tolgee's fetching mechanism if not statically provided.
    });
}
