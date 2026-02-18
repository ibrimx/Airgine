import { CardConfig } from "../types/layout";

export function enhanceCard(config: CardConfig): CardConfig {
  const enhanced = { ...config };

  // مثال: لو الكرت featured يكبر تلقائي
  if (config.content.featured) {
    enhanced.size = "2x2";
  }

  return enhanced;
}
