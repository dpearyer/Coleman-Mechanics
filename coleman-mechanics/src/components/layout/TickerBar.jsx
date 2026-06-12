const TICKER_ITEMS = [
  "Oil Changes",
  "Brake Inspections",
  "Engine Tune-Ups",
  "Summer Rebuilds",
  "Fluid Services",
  "Diagnostics",
  "Tire Rotation",
  "Battery Service",
  "Bryan, TX",
]

export default function TickerBar() {
  // Double the items so the CSS loop animation is seamless
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="ticker-bar">
      <span className="ticker-inner">
        {items.map((item, i) => (
          <span key={i}>&nbsp;&nbsp;—&nbsp;&nbsp;{item}</span>
        ))}
      </span>
    </div>
  )
}