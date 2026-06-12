export default function ServiceCard({ num, tag, title, description }) {
  return (
    <div className="service-card">
      <div className="service-num">{num}</div>
      <div className="service-tag">{tag}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}