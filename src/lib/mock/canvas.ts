import type { CanvasItem } from "@/types"

export const mockCanvasItems: CanvasItem[] = [
  {
    id: "about",
    type: "text",
    title: "About Me",
    description: "Brand storytelling & visual systems.",
    desktop: { colStart: 1, colSpan: 2, rowStart: 1, rowSpan: 1 },
    mobile: { colStart: 1, colSpan: 2, rowStart: 1, rowSpan: 1 },
  },
  {
    id: "plumb",
    type: "image",
    title: "Plumb",
    image: "/test1.jpg",
    desktop: { colStart: 3, colSpan: 1, rowStart: 1, rowSpan: 1 },
    mobile: { colStart: 1, colSpan: 1, rowStart: 2, rowSpan: 1 },
  },
  {
    id: "supermanage",
    type: "image",
    title: "Supermanage",
    image: "/test2.jpg",
    desktop: { colStart: 4, colSpan: 1, rowStart: 1, rowSpan: 1 },
    mobile: { colStart: 2, colSpan: 1, rowStart: 2, rowSpan: 1 },
  },
  {
    id: "marginalia",
    type: "text",
    title: "Marginalia",
    description: "Type exploration.",
    desktop: { colStart: 1, colSpan: 1, rowStart: 2, rowSpan: 1 },
    mobile: { colStart: 1, colSpan: 1, rowStart: 3, rowSpan: 1 },
  },
  {
    id: "sbv",
    type: "text",
    title: "SBV",
    description: "Vintage brand direction.",
    desktop: { colStart: 2, colSpan: 2, rowStart: 2, rowSpan: 1 },
    mobile: { colStart: 2, colSpan: 1, rowStart: 3, rowSpan: 1 },
  },
  {
    id: "logos",
    type: "link",
    title: "Logos & Lettering",
    href: "#",
    desktop: { colStart: 4, colSpan: 1, rowStart: 2, rowSpan: 2 },
    mobile: { colStart: 1, colSpan: 2, rowStart: 4, rowSpan: 1 },
  },
]
