import { useState } from "react"
import { navData } from "../../db/navData"
import DropDown from "./Desktop/Dropdown/DropDown"
import Desktop from "./Desktop/Desktop"
import Mobile from "./Mobile/Mobile"
import Hamburger from "./Mobile/Hamburger"


export default function Nav({ navBreakPoint }: { navBreakPoint: boolean }) {
  const [active, setActive] = useState<number | null>(null)

  const handleActive = (index: number | null) => {
    setActive(index)
    return
  }

  return (
    <div className="nav-container">
      <div className="container-large">
        <div className="nav-inner-container">
          <div className="nav-brand-margin">
            <img className="nav-brand-img" src="./rock.svg" alt="Breathe Valor" />
          </div>
          {navBreakPoint ?
            <Desktop handleActive={handleActive} />
            :
            <div>
              <Hamburger />
              <Mobile />
            </div>}
        </div>
        <div>
          {navData.map(data => {
            return (
              active === data.id && <DropDown key={data.catagory} handleActive={handleActive} data={data} />
            )
          })}
        </div>
      </div>
    </div>
  )
}