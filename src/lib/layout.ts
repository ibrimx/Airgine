import type { CanvasItem } from "@/types"

export type PositionedItem = CanvasItem & {
  desktop: {
    colStart: number
    colSpan: number
    rowStart: number
    rowSpan: number
  }
  mobile: {
    colStart: number
    colSpan: number
    rowStart: number
    rowSpan: number
  }
}

const DESKTOP_WIDTH = 4
const MOBILE_WIDTH = 2

function getSpans(layout: string) {
  switch (layout) {
    case "hero":
      return {
        desktop: { colSpan: 2, rowSpan: 1 },
        mobile: { colSpan: 2, rowSpan: 1 },
      }
    case "wide":
      return {
        desktop: { colSpan: 2, rowSpan: 1 },
        mobile: { colSpan: 2, rowSpan: 1 },
      }
    case "feature":
      return {
        desktop: { colSpan: 2, rowSpan: 2 },
        mobile: { colSpan: 2, rowSpan: 1 },
      }
    case "square":
    default:
      return {
        desktop: { colSpan: 1, rowSpan: 1 },
        mobile: { colSpan: 1, rowSpan: 1 },
      }
  }
}

export function mapLayout(items: CanvasItem[]): PositionedItem[] {
  const visible = items
    .filter((i) => i.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

  let desktopCol = 1
  let desktopRow = 1

  let mobileCol = 1
  let mobileRow = 1

  return visible.map((item) => {
    const spans = getSpans(item.layout)

    // Desktop placement
    if (desktopCol + spans.desktop.colSpan - 1 > DESKTOP_WIDTH) {
      desktopCol = 1
      desktopRow++
    }

    const desktopPosition = {
      colStart: desktopCol,
      colSpan: spans.desktop.colSpan,
      rowStart: desktopRow,
      rowSpan: spans.desktop.rowSpan,
    }

    desktopCol += spans.desktop.colSpan

    // Mobile placement
    if (mobileCol + spans.mobile.colSpan - 1 > MOBILE_WIDTH) {
      mobileCol = 1
      mobileRow++
    }

    const mobilePosition = {
      colStart: mobileCol,
      colSpan: spans.mobile.colSpan,
      rowStart: mobileRow,
      rowSpan: spans.mobile.rowSpan,
    }

    mobileCol += spans.mobile.colSpan

    return {
      ...item,
      desktop: desktopPosition,
      mobile: mobilePosition,
    }
  })
}
