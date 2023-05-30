import { useState } from "react"
import { useMediaQuery } from 'react-responsive'

import Products from "./Desktop/Dropdowns/Product"
import Services from "./Desktop/Dropdowns/Services"
import Desktop from "./Desktop"
import Mobile from "./Mobile"
import Hamburger from "./Mobile/Hamburger"


export default function Nav() {
  const [active, setActive] = useState<number | null>(null)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 730px)'
  })

  const handleActive = (index: number | null) => {
    setActive(index)
    return
  }

  return (
    <div className="nav-container">
      <div className="container-large">
        <div className={`nav-inner-container ${isDesktopOrLaptop ? 'nav-border' : ''}`}>
          {/* Container splitting brand/link */}
          <div className="brand-margin">
            <img className="brand-img" src="./rock.svg" alt="Get Your Rocks" />
          </div>
          {isDesktopOrLaptop ?
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