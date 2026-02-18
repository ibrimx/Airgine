export type SectionLayout =
  | "bento"
  | "hero"
  | "cards";

export interface Section {
  id: string;
  slug: string;
  name: string;

  layout: SectionLayout;

  order: number;
  status: "draft" | "published";
}
