export type LayoutType =
  | "square"
  | "wide"
  | "feature"
  | "hero"

export interface CanvasItem {
  id: string
  type: "card" | "story" | "project"
  title?: string
  description?: string
  image?: string
  link?: string
  layout: LayoutType
  order?: number
  visible?: boolean
}

export interface SiteConfig {
  siteName: string
  tagline?: string
  logo?: string
  theme?: "light" | "dark"
}
