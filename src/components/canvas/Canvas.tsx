import { mapLayout } from "@/lib/layout"
import type { CanvasItem } from "@/types"
import Card from "../Card"

interface Props {
  items: CanvasItem[]
}

export default function Canvas({ items }: Props) {
  const positioned = mapLayout(items)

  return (
    <div className="canvas">
      {positioned.map((item) => (
        <div
          key={item.id}
          className="canvas-item"
          style={{
            gridColumn: `${item.desktop.colStart} / span ${item.desktop.colSpan}`,
            gridRow: `${item.desktop.rowStart} / span ${item.desktop.rowSpan}`,
          }}
          data-mobile-col={item.mobile.colStart}
          data-mobile-span={item.mobile.colSpan}
          data-mobile-row={item.mobile.rowStart}
        >
          <Card item={item} />
        </div>
      ))}
    </div>
  )
}
