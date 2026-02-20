import { useEffect, useState } from "react"
import { mapLayout } from "@/lib/layout"
import type { CanvasItem } from "@/types"
import Card from "../Card"

interface Props {
  items: CanvasItem[]
}

export default function Canvas({ items }: Props) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const positioned = mapLayout(items)

  return (
    <div className="canvas">
      {positioned.map((item) => {
        const layout = isMobile ? item.mobile : item.desktop

        return (
          <div
            key={item.id}
            className="canvas-item"
            style={{
              gridColumn: `${layout.colStart} / span ${layout.colSpan}`,
              gridRow: `${layout.rowStart} / span ${layout.rowSpan}`,
            }}
          >
            <Card item={item} />
          </div>
        )
      })}
    </div>
  )
}
