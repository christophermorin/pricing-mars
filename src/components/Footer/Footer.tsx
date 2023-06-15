import { footerData } from "../../db/footerData"
import Socials from "../Socials/Socials"

export default function Footer() {
  return (
    <div style={{ paddingTop: "120px" }}>
      <footer className="container-large" style={{ height: "100%" }}>
        <div className="footer-cols">
          {footerData.map(data => {
            return (
              <ul>
                <p className="header">{data.header}</p>
                {data.links.map(link => {
                  return (
                    <li>{link}</li>
                  )
                })}
              </ul>
            )
          })}
        </div>
        <Socials />
      </footer>
    </div>
  )
}