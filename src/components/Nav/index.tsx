import { useState } from "react"
import { useMediaQuery } from 'react-responsive'

import Products from "./Desktop/Dropdowns/Product"
import Services from "./Desktop/Dropdowns/Services"
import Desktop from "./Desktop"
import Mobile from "./Mobile"
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
        <div className={`nav-inner-container ${navBreakPoint ? 'nav-border' : ''}`}>
          {/* Container splitting brand/link */}
          <div className="brand-margin">
            <img className="brand-img" src="./rock.svg" alt="Get Your Rocks" />
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
          {active === 1 && <Products handleActive={handleActive} />}
          {active === 2 && <Services handleActive={handleActive} />}
        </div>
      </div>
    </div>
  )
}