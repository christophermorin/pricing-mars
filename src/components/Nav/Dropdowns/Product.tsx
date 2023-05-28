export default function Products({ handleActive }) {
  return (
    <div onMouseLeave={() => handleActive(null)} className="container-large dropdown-container">
      <div className="dropdown-inner-container col-4">
        <div>
          <h3 className="dd-headers">
            Product
          </h3>
          <ul className="dd-list">
            <li className="text-1">test</li>
            <li className="text-2">jsjdsdsj</li>
            <li className="text-3">sdjdfhskdfh</li>
            <li className="text-4">sdfjhds</li>
            <li className="text-5">sdfsdsk</li>
          </ul>
        </div>
        <div>
          <h3 className="dd-headers">
            Services
          </h3>
          <ul className="dd-list">
            <li>test</li>
            <li>jsjdsdsj</li>
            <li>sdjdfhskdfh</li>
            <li>sdfjhds</li>
            <li>sdfsdsk</li>
          </ul>
        </div>
        <div>
          <h3 className="dd-headers">
            Pricing
          </h3>
          <ul className="dd-list">
            <li>test</li>
            <li>jsjdsdsj</li>
            <li>sdjdfhskdfh</li>
            <li>sdfjhds</li>
            <li>sdfsdsk</li>
          </ul>
        </div>
        <div>
          <h3 className="dd-headers">
            Random
          </h3>
          <ul className="dd-list">
            <li>test</li>
            <li>jsjdsdsj</li>
            <li>sdjdfhskdfh</li>
            <li>sdfjhds</li>
            <li>sdfsdsk</li>
          </ul>
        </div>

      </div>
    </div>
  )
}