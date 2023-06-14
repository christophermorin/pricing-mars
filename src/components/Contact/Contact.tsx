import { contactData } from "../../db/contactData"
import ContactCard from "./ContactCard"
import ChatBox from "./ChatBox"

export default function Contact() {
  return (
    <div>
      <div className="container-medium" >
        <section className="contact-container">
          <ChatBox />
          <div className="contact-card-container">
            {contactData.map(card => {
              return (
                <ContactCard key={card.id} card={card} />
              )
            })}
          </div>
        </section>
        <section className="banner-container">
          <div className="banner">
            <h2 className="text-2 w-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, magnam!</h2>
            <div className="btn-primary banner-btn">Whats this</div>
          </div>
        </section>
      </div >
    </div >
  )
}