import { footerData } from "../../db/footerData"

export default function Footer() {
  return (
    <div style={{ paddingTop: "120px" }}>
      <footer className="container-large" style={{ height: "100%" }}>
        <div className="footer-cols">
          <ul>
            <p>Image</p>
            <p className="">{footerData[0].header}</p>
            {footerData[0].links.map(link => {
              return (
                <li key={link}>{link}</li>
              )
            })}
          </ul>
          <ul>
            <p className="">Products</p>
            <li>random</li>
            <li>asd</li>
            <li>dfsfa</li>
            <li>sdfdfa</li>
            <li>assdf</li>
          </ul>
          <ul>
            <p className="">Services</p>
            <li>lorem</li>
            <li>asdkjd</li>
            <li>asdfa</li>
            <li>sfdfa</li>
            <li>aasdf</li>
            <li>ajhfasd</li>
            <li>dsdfa</li>
            <li>ssdfdfa</li>
            <li>asf</li>
          </ul>
          <ul>
            <p className="">Header</p>
            <li>lorem</li>
            <li>asdkjhfasd</li>
            <li>dfsdfasdfa</li>
            <li>sdfasdfdfa</li>
            <li>asdfasdfasdf</li>
          </ul>
          <ul>
            <p className="">Header</p>
            <li>lorem</li>
            <li>asdkjhfasd</li>
            <li>dfsdfasdfa</li>
            <li>sdfasdfdfa</li>
            <li>asdfasdfasdf</li>
          </ul>
        </div>
        <section>
          Socials
        </section>
      </footer>
    </div>
  )
}