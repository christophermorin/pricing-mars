import { useState } from "react"

export default function DropDown({ comp }) {
  const [show, setShow] = useState(false)

  const handleShowTrue = () => {
    setShow(true)
  }

  const handleShowFalse = () => {
    setShow(false)
  }
  return (
    <div>
      <div onMouseEnter={handleShowTrue} className='test'>Testing Box</div>
      {show && <div onMouseEnter={handleShowTrue} onMouseLeave={handleShowFalse} className='isShown'>{comp}</div>}
    </div>
  )
}