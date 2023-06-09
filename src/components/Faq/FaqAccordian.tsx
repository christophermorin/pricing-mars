import { useState } from "react"

export default function FaqAccordian({ id }: { id: number }) {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="menu-li" data-testid="faq-accordian">
      <div>
        <input id={`faq${id}`} type="checkbox" checked={open} onChange={handleOpen} />
        <label htmlFor={`faq${id}`} style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ marginBottom: "20px" }}>Products</h2>
          <img className={`${!open ? "faq-chevron" : "faq-chevron-open"} `} src="chevron-up.svg" alt="accordian state indicator" />
        </label>
        <div className="faq" onClick={handleOpen}>
          {/* <div> */}
          {/* // TODO: move temp styles to scss files */}
          <ul className="faq-ul">
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure obcaecati consequatur ducimus quod soluta cupiditate! Animi sit sunt quos facere. Lorem ipsum dolo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, nisi!</li>
          </ul>
          {/* </div> */}
        </div>

      </div>
    </div>
  )
}