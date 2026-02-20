export interface LayoutPosition {
  colStart: number
  colSpan: number
  rowStart: number
  rowSpan: number
}

export interface CanvasItem {
  id: string
  type: "text" | "image" | "link"
  title?: string
  description?: string
  image?: string
  href?: string

  desktop: LayoutPosition
  mobile: LayoutPosition
}
