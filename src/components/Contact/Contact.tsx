export default function Contact() {
  return (
    <div style={{ paddingBottom: "120px" }}>
      <div className="container-medium" style={{ height: "100%" }}>
        <section className="contact-container">
          <div className="chatbox-container">
            <div className="chatbox">
              <div className="chatbox-inner"></div>
              <div className="chatbox-inner"></div>
              <div className="chatbox-inner inner-large"></div>
            </div>

            <div className="chatbubble-1 chatbubble-container">
              <img src="/chat-12.svg" />
              <p>Lets talk!</p>
            </div>
            <div className="chatbubble-2 chatbubble-container">
              <img src="/filler.svg" />
              <p>Lorem ipsum dolor ipsum dol sdfssfsf!</p>
            </div>
            <div className="chatbubble-3 chatbubble-container">
              <img src="/filler.svg" />
              <p>Lorem ipsum dolor?</p>
            </div>
          </div>
          <div style={{ width: "100%", padding: "0 20px" }}>
            <div style={{ padding: "20px" }}>
              <div className="contact-card">
                <h2 className="text-2">Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero iusto ex temporibus praesentium aliquam consectetur sapiente tempora ratione repudiandae!</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div style={{ border: "1px solid grey", padding: "0 20px" }}></div>
            <div style={{ padding: "20px" }}>
              <div className="contact-card">
                <h2 className="text-2">Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero iusto ex temporibus praesentium aliquam consectetur sapiente tempora ratione repudiandae!</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </section>
        <section style={{ width: "100%", border: "1px solid red", marginTop: "120px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 120px", height: "100%" }}>
            <h2 className="text-2 w-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, magnam!</h2>
            <div className="btn-primary w-2" style={{ padding: "20px 40px" }}>Whats this</div>
          </div>
        </section>
      </div >
    </div >
  )
}