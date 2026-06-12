import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav style={{
      background: scrolled ? "rgba(18,32,46,0.99)" : "rgba(27,42,59,0.97)"
    }}>
      <a href="#hero" className="nav-logo">Coleman <span>Auto</span></a>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#process">How It Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="tel:9794025488" className="nav-cta">Call Now</a>
    </nav>
  )
}