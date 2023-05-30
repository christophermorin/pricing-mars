interface Props {
  handleActive: (idx: number | null) => void
}

export default function Desktop({ handleActive }: Props) {
  return (
    <div className="w-10">
      {/* Container holding links/signup */}
      <div className="justify-between">
        {/* Container splitting Links/Signup */}
        <nav className="desk-nav">
          <ul >
            <li onMouseOver={() => { handleActive(1) }} tabIndex={1}>
              Product
            </li>
            <li onMouseOver={() => { handleActive(2) }} tabIndex={2}>Services</li>
            <li onMouseOver={() => { handleActive(3) }} tabIndex={3}>Pricing</li>
            <li onMouseOver={() => { handleActive(4) }} tabIndex={4}>Contacts</li>
          </ul>
        </nav>
        <div style={{ display: 'flex', gap: '2px' }}>
          <div className="btn-secondary">
            Login
          </div>
          <div className="btn-primary">
            SignUp
          </div>
        </div>
      </div>
    </div>
  )
}