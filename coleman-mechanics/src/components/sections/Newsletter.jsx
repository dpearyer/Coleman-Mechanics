export default function Newsletter() {
  return (
    <section id="newsletter">
      <div className="newsletter-inner">
        <div className="newsletter-text">
          <div className="section-eyebrow">Stay In The Loop</div>
          <h2>Maintenance Tips &<br />Seasonal Reminders</h2>
          <p>Sign up and we'll send occasional reminders when it's time for an oil change, pre-summer checkup, or when we're running a special. No spam — just useful stuff.</p>
        </div>
        <div className="newsletter-form">
          <iframe
            title="Coleman Auto Newsletter Signup"
            width="540"
            height="305"
            src="https://25938a73.sibforms.com/v2/serve/MUIFAOsrdzjyjCB00hSf8i8WSF1EIY28Wkce90OCKn-hSNbe-5ytHqcJsLx2GS2bEUn1DqvL-WHMwqbs1bXXIgR14qH-Vw5Gx9bAjAtijM2lAD6I0NrG7uVChacU4PfZJxzoZStRg2_qyRrEmzsMXLyWMxX5n-N8j8y-tGT6SxG5DVATOrCZEsh4uo8XGwWXmM2TQ6-gHDjBirMc_g=="
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{ display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
          />
        </div>
      </div>
    </section>
  )
}