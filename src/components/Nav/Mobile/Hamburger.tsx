export default function Hamburger() {
  return (
    <>
      <input id="toggleMenu" type="checkbox" />
      <label className="hamburger" htmlFor="toggleMenu">
        <div className="top"></div>
        <div className="meat"></div>
        <div className="bottom"></div>
      </label>
    </>
  )
}