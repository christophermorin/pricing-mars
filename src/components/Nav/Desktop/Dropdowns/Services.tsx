interface Props {
  handleActive: (index: number | null) => void
}

export default function Services({ handleActive }: Props) {
  return (
    <div onMouseLeave={() => handleActive(null)} className="container-large dropdown-container">
      <div className="dropdown-inner-container col-4">
        <div>
          <h3 className="dropdown-headers">
            Business Services
          </h3>
          <ul className="dropdown-ul">
            <li>Consulting</li>
            <li>Marketing</li>
            <li>Recruiting</li>
            <li>Virtual Assistant</li>
            <li>More...</li>
          </ul>
        </div>
        <div>
          <h3 className="dropdown-headers">
            Creative and Digital
          </h3>
          <ul className="dropdown-ul">
            <li> Design</li>
            <li>Photography</li>
            <li>Software Development</li>
            <li>Writing</li>
            <li>More...</li>
          </ul>
        </div>
        <div>
          <h3 className="dropdown-headers">
            Professional Services
          </h3>
          <ul className="dropdown-ul">
            <li>Coaching</li>
            <li>Architecture</li>
            <li>Accounting</li>
            <li>Legal</li>
            <li>More...</li>
          </ul>
        </div>
        <div>
          <h3 className="dropdown-headers">
            Other services
          </h3>
          <ul className="dropdown-ul">
            <li>Event Planning</li>
            <li>Interior Design</li>
            <li>Real-Estate</li>
            <li>More...</li>
          </ul>
        </div>
      </div>
    </div>
  )
}