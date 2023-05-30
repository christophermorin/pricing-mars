export default function ProductAcc() {
  return (
    <li className="menu-li">
      <div>
        <input id="acc1" type="checkbox" />
        <label htmlFor="acc1">
          <h2 style={{ paddingBottom: "10px" }}>Products</h2>
        </label>
        <div className="acc">
          {/* // TODO: move temp styles to scss files */}
          <ul style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", marginTop: "5px", height: "100%", paddingLeft: "10px" }}>
            <li>CRM</li>
            <li>Scheduling</li>
            <li>Proposals</li>
            <li>Contacts</li>
            <li>Forms</li>
            <li>Time Tracking</li>
            <li>Tasks</li>
            <li>File Sharing</li>
            <li>Client portal</li>
            <li>Collaboration</li>
            <li>Invoicing</li>
            <li>Payments</li>
            <li>Accouting</li>
            <li>Taxes</li>
            <li>Banking</li>
          </ul>
        </div>
      </div>
    </li>
  )
}