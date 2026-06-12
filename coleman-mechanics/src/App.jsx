
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import TickerBar from "./components/layout/TickerBar"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import About from "./components/sections/About"
import Process from "./components/sections/Process"
import Contact from "./components/sections/Contact"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TickerBar />
      <Services />
      <div className="rule" />
      <About />
      <div className="rule-dark" />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}