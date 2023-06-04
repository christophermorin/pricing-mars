import { navData } from "../../../db/navData"

import Accordian from "./Accordian"

export default function Mobile() {

  return (
    <div className="menu">
      <nav className="menu-container">
        <ul className="menu-ul">
          {navData.map(data => {
            return (
              <Accordian key={data.catagory} data={data} />
            )
          })}
        </ul>
      </nav>
    </div>
  )
}