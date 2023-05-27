import { useState } from "react"

export default function DesktopNav() {
  const [active, setActive] = useState(null)

  const handleActive = (index) => {
    setActive(index)
  }

  function TestBox() {
    return (
      <div onMouseLeave={() => handleActive(null)} style={{ position: "absolute" }}><ul><li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li></ul></div>
    )
  }

  return (
    <div className="navbar-desktop">
      <div className="container-large">
        <div className="navbar-container">
          <div className="nav-flex">
            <section className="nav-brand">BrandLogo</section>
            <div className="nav-menu-container">
              <nav className="nav-wrapper">
                <ul className="list-styles">
                  <li style={{ position: "relative" }} onMouseOver={() => handleActive(1)}>Product{active === 1 && <TestBox />}</li>
                  <li onMouseOver={() => handleActive(2)} className="wee">Product</li>
                  <li onMouseOver={() => handleActive(3)}>Plans</li>
                  <li onMouseOver={() => handleActive(4)}>Pricing{active === 4 && <TestBox />}</li>
                  <li onMouseOver={() => handleActive(5)}>Reviews</li>
                </ul>
              </nav>
              <section className="nav-wrapper">login signup</section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}