import { ContentItem } from "../types/content";

export function processContent(items: ContentItem[]): ContentItem[] {
  return items
    .filter((item) => item.status === "published")
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
}
