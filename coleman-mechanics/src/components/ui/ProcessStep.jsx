// components/ui/ProcessStep.jsx
export default function ProcessStep({ num, title, description, showConnector }) {
  return (
    <div className="step">
      <span className="step-num">{num}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {showConnector && <div className="step-connector" />}
    </div>
  )
}