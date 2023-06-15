import { contactDataType } from "../../db/contactData"

export default function ContactCard({ card }: { card: contactDataType }) {
  return (
    <div style={{ padding: "20px" }}>
      <div className="contact-card">
        <h2 className="text-2">{card.header}</h2>
        <p>{card.content}</p>
        {card.type === "contact" ? <p className="nav-buttons">Contact Us</p> : <p className="btn-card">Join Us!</p>}
      </div>
      <div className="divider"></div>

    </div>
  )
}