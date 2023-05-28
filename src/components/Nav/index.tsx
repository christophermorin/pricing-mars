import { useState } from "react"
import Products from "./Dropdowns/Product"
import Services from "./Dropdowns/Services"

function Test() {
  return (
    <div style={{ height: "200px", width: "100%", background: "red", position: "absolute", left: "0", }}>

    </div>
  )
}


export default function Nav() {
  const [active, setActive] = useState(null)

  const handleActive = (index) => {
    setActive(index)
  }

  return (
    <div className="nav-container border-blue">
      <div className="container-large">
        <div className="nav-inner-container border-red">
          {/* Container splitting brand/link */}
          <div className="brand-margin">
            Brand
          </div>
          <div className="justify-between nav-wrapper">
            {/* Container holding links/signup */}
            <div className="justify-between nav-wrapper">
              {/* Container splitting Links/Signup */}
              <nav style={{}}>
                <ul >
                  <li onMouseOver={() => { handleActive(1) }} tabIndex={1}>
                    Product
                  </li>
                  <li onMouseOver={() => { handleActive(2) }} tabIndex={2}>Services</li>
                  <li tabIndex={3}>Pricing</li>
                  <li tabIndex={4}>Contacts</li>
                </ul>
              </nav>
              <div>
                <div>
                  Login
                </div>
                <div>
                  SignUp
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {active === 1 && <Products handleActive={handleActive} />}
          {active === 2 && <Services handleActive={handleActive} />}
        </div>
      </div>
    </div>
  )
}