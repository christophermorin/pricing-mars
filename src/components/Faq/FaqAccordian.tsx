import { useState } from "react"
import { faqDataType } from "../../db/faqData"

export default function FaqAccordian({ faq }: { faq: faqDataType }) {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="menu-li" data-testid="faq-accordian">
      <div>
        <input id={`faq${faq.id}`} type="checkbox" checked={open} onChange={handleOpen} />
        <label htmlFor={`faq${faq.id}`} style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ marginBottom: "20px" }}>{faq.header}</h2>
          <img className={`${!open ? "faq-chevron" : "faq-chevron-open"} `} src="chevron-up.svg" alt="accordian state indicator" />
        </label>
        <div className="faq" onClick={handleOpen}>
          <ul className="faq-ul">
            <li>{faq.content}</li>
          </ul>
        </div>

      </div>
    </div>
  )
}