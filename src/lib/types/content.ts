export type ContentType =
  | "post"
  | "project"
  | "travel";

export type CardVariant =
  | "text"
  | "media"
  | "overlay"
  | "sticker"
  | "hero"
  | "post-list";

export type GridSize =
  | "1x1"
  | "1x2"
  | "2x1"
  | "2x2";

export interface ContentItem {
  id: string;
  slug: string;

  type: ContentType;
  section: string;

  title: string;
  excerpt?: string;
  content?: string;

  cover?: string;
  gallery?: string[];

  cardVariant: CardVariant;
  gridSize: GridSize;

  background?: string;
  textColor?: "light" | "dark";

  rotation?: number;

  tags?: string[];
  date?: string;

  featured?: boolean;
  status: "draft" | "published";
}
