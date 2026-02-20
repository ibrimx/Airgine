import type { CanvasItem } from '../../lib/types'

type CardProps = {
  item: CanvasItem
}

export default function Card({ item }: CardProps) {
  return (
    <div className="card">
      <a href={`/${item.slug}`}>
        {item.image ? <img src={item.image} alt={item.title} /> : null}
        <h2>{item.title}</h2>
        {item.excerpt ? <p>{item.excerpt}</p> : null}
      </a>
    </div>
  )
}
