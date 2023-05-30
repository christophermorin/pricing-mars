interface Props {
  handleActive: (idx: number | null) => void
}

export default function Desktop({ handleActive }: Props) {
  return (
    <div className="nav-wrapper">
      {/* Container holding links/signup */}
      <div className="nav-wrapper">
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
  )
}