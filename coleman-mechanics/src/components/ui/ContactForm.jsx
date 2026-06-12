import { useState } from "react"

const SERVICES = [
  "Preventive Maintenance",
  "Oil Changes",
  "AC Services",
  "Ad Hoc / Emergency Repair",
  "Summer Rebuild",
  "Diagnostics",
  "Accessory Installation",
  "Brakes & Suspension",
  "Cooling & Fluids",
  "Engine Repair",
  "Not Sure — Need a Diagnosis",
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    fname: "", lname: "", email: "",
    phone: "", service: "", location: "", message: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async () => {
    const { fname, email, service, message } = form
    if (!fname || !email || !service || !message) {
      alert("Please fill out all required fields.")
      return
    }

    try {
      const response = await fetch("https://formspree.io/f/xgobpogb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.fname} ${form.lname}`,
          email: form.email,
          phone: form.phone,
          service: form.service,
          location: form.location,
          message: form.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again or call directly.")
      }
    } catch (err) {
      alert("Something went wrong. Please try again or call directly.")
    }
  }

  return (
    <div className="contact-form">
      <div className="form-title">Send a Message</div>
      <div className="form-subtitle">We'll get back to you within 24 hours</div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" placeholder="First name" value={form.fname} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" placeholder="Last name" value={form.lname} onChange={handleChange} />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone (optional)</label>
        <input type="tel" id="phone" placeholder="(979) 000-0000" value={form.phone} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Needed</label>
        <select id="service" value={form.service} onChange={handleChange}>
          <option value="" disabled>Select a service type...</option>
          {SERVICES.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="location">Your Location</label>
        <input type="text" id="location" placeholder="Your city, neighborhood, or address" value={form.location} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="message">Tell Us About Your Vehicle & Issue</label>
        <textarea id="message" placeholder="Year, make, model — and what's going on..." value={form.message} onChange={handleChange} />
      </div>

      <button
        type="button"
        className="form-submit"
        onClick={handleSubmit}
        style={submitted ? { background: "#2f5240" } : {}}
        disabled={submitted}
      >
        {submitted ? "Message Sent ✓" : "Send Message"}
      </button>
    </div>
  )
}