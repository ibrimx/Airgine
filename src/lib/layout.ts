import type { CanvasItem } from './types'

export function mapLayout(items: CanvasItem[]) {
  return items.filter((item) => item.visible).sort((a, b) => a.order - b.order)
}
