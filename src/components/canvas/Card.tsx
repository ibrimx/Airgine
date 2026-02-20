import type { CanvasItem } from "@/types"

interface Props {
  item: CanvasItem
}

export default function Card({ item }: Props) {
  return (
    <div className="card">
      {item.image && (
        <div className="card-media">
          <img src={item.image} alt={item.title ?? ""} />
        </div>
      )}

      <div className="card-content">
        {item.title && <h3>{item.title}</h3>}
        {item.description && <p>{item.description}</p>}
      </div>
    </div>
  )
}
