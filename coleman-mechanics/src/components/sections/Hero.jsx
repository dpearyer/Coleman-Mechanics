import { Fragment } from "react"

const STATS = [
  { value: "100%", label: "Reliable Service & Transparent Pricing" },
  { value: "Mobile", label: "We Come To You" },
  { value: "BCS", label: "Brazos Valley" },
]

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-lines" />
      <div className="hero-fade" />
      <div className="hero-side-accent" />

      <div className="hero-eyebrow">Bryan, Texas — Mobile Mechanic Service</div>

      <h1>
        Your Car,<br />
        <em>Running Right.</em>
      </h1>

      <p className="hero-sub">
        Preventive maintenance, emergency repairs, and full summer rebuilds — we come to you, or meet wherever works best.
      </p>

      <div className="hero-actions">
        <a href="#contact" className="btn-primary">Book a Service</a>
        <a href="#services" className="btn-ghost">View Services</a>
      </div>

      <div className="hero-stats">
        {STATS.map((stat, i) => (
        <Fragment key={i}>
            <div>
            <div className="hero-stat-val">{stat.value}</div>
            <div className="hero-stat-label">{stat.label}</div>
            </div>
            {i < STATS.length - 1 && <div className="hero-divider" />}
        </Fragment>
        ))}
      </div>
    </section>
  )
}