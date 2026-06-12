import STEPS from "../../data/process"
import ProcessStep from "../ui/ProcessStep"

export default function Process() {
  return (
    <section id="process">
      <div className="section-eyebrow">How It Works</div>
      <h2>Simple Process</h2>

      <div className="process-grid">
        {STEPS.map((step, i) => (
          <ProcessStep
            key={step.id}
            {...step}
            showConnector={i < STEPS.length - 1}
          />
        ))}
      </div>
    </section>
  )
}