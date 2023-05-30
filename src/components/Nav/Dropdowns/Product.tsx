interface Props {
  handleActive: (index: number | null) => void
}

export default function Products({ handleActive }: Props) {
  return (
    <div onMouseLeave={() => handleActive(null)} className="container-large dropdown-container">
      <div className="dropdown-inner-container col-4">
        <div>
          <h3 className="dd-headers">
            Client Management
          </h3>
          <ul className="dd-ul">
            <li>CRM</li>
            <li>Scheduling</li>
            <li>Proposals</li>
            <li>Contacts</li>
            <li>Forms</li>
          </ul>
        </div>
        <div>
          <h3 className="dd-headers">
            Project Management
          </h3>
          <ul className="dd-ul">
            <li>Time Tracking</li>
            <li>Tasks</li>
            <li>File Sharing</li>
            <li>Client portal</li>
            <li>Collaboration</li>
          </ul>
        </div>
        <div>
          <h3 className="dd-headers">
            Financial Management
          </h3>
          <ul className="dd-ul">
            <li>Invoicing</li>
            <li>Payments</li>
            <li>Accouting</li>
            <li>Taxes</li>
            <li>Banking</li>
          </ul>
        </div>
        <div>
          <h3 className="dd-headers">
            Whats New
          </h3>
        </div>
      </div>
    </div>
  )
}