interface CardProps {
  item: CanvasItem
}

export default function Card({ item }: CardProps) {
  if (item.type === "image") {
    return (
      <div className="card image-card">
        {item.image && <img src={item.image} alt={item.title} />}
        <h3>{item.title}</h3>
      </div>
    )
  }

  if (item.type === "link") {
    return (
      <div className="card link-card">
        <h3>{item.title}</h3>
      </div>
    )
  }

  return (
    <div className="card text-card">
      <h3>{item.title}</h3>
      {item.description && <p>{item.description}</p>}
    </div>
  )
}
