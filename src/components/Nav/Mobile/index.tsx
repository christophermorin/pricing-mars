import ProductAcc from "./Accordians/ProductAcc"
import ServicesAcc from "./Accordians/ServicesAcc"

export default function Mobile() {

  return (
    <div className="menu">
      <nav className="menu-container">
        <ul className="menu-ul">
          <ProductAcc />
          <ServicesAcc />
        </ul>
      </nav>
    </div>
  )
}