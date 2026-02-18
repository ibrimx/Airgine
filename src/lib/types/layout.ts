import { ContentItem } from "./content";

export interface CardConfig {
  content: ContentItem;

  variant: ContentItem["cardVariant"];
  size: ContentItem["gridSize"];

  styles: {
    background?: string;
    textColor?: string;
    rotation?: number;
  };
}

export interface SectionLayoutConfig {
  sectionSlug: string;
  cards: CardConfig[];
}
