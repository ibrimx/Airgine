import type { CanvasItem } from '../../lib/types'
import { mapLayout } from '../../lib/layout'
import Card from './Card'

type CanvasProps = {
  items: CanvasItem[]
}

export default function Canvas({ items }: CanvasProps) {
  const mappedItems = mapLayout(items)

  return (
    <div className="canvas">
      {mappedItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}
