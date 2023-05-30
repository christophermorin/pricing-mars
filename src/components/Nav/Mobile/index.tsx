import ProductAcc from "./Accordians/ProductAcc"
import ServicesAcc from "./Accordians/ServicesAcc"

export default function Mobile() {

  return (
    <div className="menu">
      <div className="menu-container">
        <ul className="menu-ul">
          <ProductAcc />
          <ServicesAcc />
        </ul>
      </div>
    </div>
  )
}