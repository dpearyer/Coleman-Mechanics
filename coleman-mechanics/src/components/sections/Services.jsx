import SERVICES from "../../data/services"
import ServiceCard from "../ui/ServiceCard"

export default function Services() {
  return (
    <section id="services">
      <div className="services-intro">
        <div>
          <div className="section-eyebrow">What We Do</div>
          <h2>Services</h2>
        </div>
        <p>From routine upkeep to full rebuilds — professional auto service brought to your door across the Brazos Valley.</p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}