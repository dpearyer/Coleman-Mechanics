import ContactForm from "../ui/ContactForm"


const CONTACT_METHODS = [
  { icon: "📞", label: "Phone", value: "(979) 402-5488", href: "tel:9794025488" },
  { icon: "✉️", label: "Email", value: "korey1coleman@gmail.com", href: "mailto:korey1coleman@gmail.com" },
  { icon: "📍", label: "Service Area", value: "Bryan, TX & Brazos Valley — We Come To You", href: null },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <div className="section-eyebrow">Get In Touch</div>
          <h2>Ready to Get<br />Your Car Right?</h2>
          <p>Reach out directly — call or email and we'll get back to you fast. No shop to drive to, no tow truck needed. We come to you and sort out the details together.</p>

          <div className="contact-methods">
            {CONTACT_METHODS.map((method, i) => (
              <div key={i} className="contact-method">
                <div className="contact-method-icon">{method.icon}</div>
                <div>
                  <div className="contact-method-label">{method.label}</div>
                  {method.href
                    ? <a href={method.href} className="contact-method-value">{method.value}</a>
                    : <span className="contact-method-value">{method.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}