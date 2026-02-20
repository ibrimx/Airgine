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
        {item.title && <h3 className="card-title">{item.title}</h3>}
        {item.description && (
          <p className="card-description">{item.description}</p>
        )}
        {item.link && (
          <a href={item.link} className="card-link">
            View →
          </a>
        )}
      </div>
    </div>
  )
}
