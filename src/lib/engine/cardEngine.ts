import { CardConfig } from "../types/layout";

export function enhanceCard(config: CardConfig): CardConfig {
  const enhanced = { ...config };

  // ✅ Fix: لا تكتب فوق size لو كانت محددة مسبقاً
  if (config.content.featured && !config.size) {
    enhanced.size = "2x2";
  }

  return enhanced;
}
