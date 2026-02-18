import { ContentItem } from "../types/content";
import { CardConfig } from "../types/layout";

export function generateCardConfigs(
  items: ContentItem[]
): CardConfig[] {
  return items.map((item) => ({
    content: item,
    variant: item.cardVariant,
    size: item.gridSize,
    styles: {
      background: item.background,
      textColor:
        item.textColor === "light" ? "#ffffff" : "#111111",
      rotation: item.rotation ?? 0,
    },
  }));
}
