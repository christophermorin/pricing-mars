import { useState } from "react"
import { useMediaQuery } from 'react-responsive'

import Products from "./Dropdowns/Product"
import Services from "./Dropdowns/Services"
import Desktop from "./Desktop"
import Mobile from "./Mobile"


export default function Nav() {
  const [active, setActive] = useState<number | null>(null)
  const [menu, setMenu] = useState<boolean>(false)

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 630px)'
  })

  const handleActive = (index: number | null) => {
    setActive(index)
    return
  }

  const showMobile = () => {
    setMenu(!menu)
  }

  return (
    <div className="nav-container">
      <div className="container-large">
        <div className="nav-inner-container" style={{ borderBottom: "1px solid black" }}>
          {/* Container splitting brand/link */}
          <div className="brand-margin">
            Brand
          </div>
          {isDesktopOrLaptop ?
            <Desktop handleActive={handleActive} />
            :
            <div>
              <input id="toggle1" type="checkbox" />
              <label className="hamburger1" htmlFor="toggle1">
                <div className="top"></div>
                <div className="meat"></div>
                <div className="bottom"></div>
              </label>
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