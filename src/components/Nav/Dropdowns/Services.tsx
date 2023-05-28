export default function Services({ handleActive }) {
  return (
    <div onMouseLeave={() => handleActive(null)} className="container-large dropdown-container">
      <div className="dropdown-inner-container col-4">
        <div>
          <h3 className="dd-headers">
            Services
          </h3>
          <ul className="dd-list">
            <li>test</li>
            <li>weeewoo</li>
            <li>woopwopp</li>
            <li>reeee</li>
            <li>sneeenooo</li>
          </ul>
        </div>
        <div>
          <h3 className="dd-headers">
            teapot
          </h3>
          <ul className="dd-list">
            <li>test</li>
            <li>weeewoo</li>
            <li>sdjdfhskdfh</li>
            <li>reeee</li>
            <li>sneeenooo</li>
          </ul>
        </div>
        <div>
          <h3 className="dd-headers">
            Sanarkka
          </h3>
          <ul className="dd-list">
            <li>test</li>
            <li>weeewoo</li>
            <li>sdjdfhskdfh</li>
            <li>reeee</li>
            <li>sneeenooo</li>
          </ul>
        </div>
      </div>
    </div>
  )
}