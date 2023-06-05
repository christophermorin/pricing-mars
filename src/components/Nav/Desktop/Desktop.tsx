interface Props {
  handleActive: (idx: number | null) => void
}

export default function Desktop({ handleActive }: Props) {
  return (
    <div className="w-10">
      {/* Container holding links/signup */}
      <div className="pos-justify-between">
        {/* Container splitting Links/Signup */}
        <nav className="desktop-nav">
          <ul>
            <li onMouseOver={() => { handleActive(1) }} tabIndex={1}>
              Product
            </li>
            <li onMouseOver={() => { handleActive(2) }} tabIndex={2}>Services</li>
            <li onMouseOver={() => { handleActive(3) }} tabIndex={3}>Pricing</li>
            <li onMouseOver={() => { handleActive(4) }} tabIndex={4}>Contacts</li>
          </ul>
        </nav>
        <div className="desktop-auth">
          <div className="btn-secondary">
            Login
          </div>
          <div className="btn-primary">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  )
}