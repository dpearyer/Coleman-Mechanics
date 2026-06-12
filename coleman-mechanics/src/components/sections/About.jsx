const STATS = [
  { value: "100%", label: "Reliable" },
  { value: "Mobile", label: "We Come To You" },
  { value: "BCS", label: "Brazos Valley" },
]

const BULLETS = [
  "We come to your home, office, or agreed location",
  "Direct communication — no middlemen",
  "Upfront pricing before any work begins",
  "Serving Bryan, College Station & surrounding areas",
  "Flexible scheduling for busy people",
  "Quality parts, no unnecessary upsells",
]

export default function About() {
  return (
    <section id="about">
      <div className="about-visual-wrap">
        <div className="about-card">
          <div className="about-card-top">
            <div className="about-card-monogram">CA</div>
            <div className="about-card-name">Coleman Auto</div>
            <div className="about-card-sub">Bryan, TX — Est. College Station</div>
          </div>
          <div className="about-card-stats">
            {STATS.map((stat, i) => (
              <div key={i} className="about-stat">
                <div className="about-stat-val">{stat.value}</div>
                <div className="about-stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="section-eyebrow">Who We Are</div>
        <h2>Mobile Service,<br />High Standards</h2>

        <p>Coleman Auto is a <strong>mobile mechanic service</strong> based in Bryan, Texas — built on the idea that auto repair doesn't have to mean towing your car somewhere and hoping for the best.</p>

        <p>We come to you. Whether that's your driveway, your workplace, or another location that works for you — we'll coordinate the details and show up ready to work. You deal directly with the person doing the job. <strong>No service writers, no runaround, no surprises on the bill.</strong></p>

        <p>Whether you need a routine oil change to stay ahead of trouble, an urgent repair that came out of nowhere, or a full summer rebuild on something you love — we bring the expertise to your door.</p>

        <ul className="about-list">
          {BULLETS.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}