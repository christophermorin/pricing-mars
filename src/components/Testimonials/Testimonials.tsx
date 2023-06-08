import QuoteBox from "./QuoteBox"

export default function Testimonials() {
  return (
    <div style={{ paddingBottom: "120px" }}>
      <div className="container-medium">
        <h2 className="text-2" style={{ textAlign: "center" }}>Words from our users...</h2>
        <div className="overflow">
          <section className="testimonial-container">
            <div className="quotes-row">
              <QuoteBox text={"Adjsks"} />
              <QuoteBox text={"Adjsks aa asdadd aas"} />
              <QuoteBox text={"Adjsks asdadddas"} />
              <QuoteBox text={"Adjsks asda ass"} />


            </div>
            <div className="quotes-row">
              <QuoteBox text={"Adjsks asdasdasasds"} />
              <QuoteBox text={"Adjs sdfafa ad"} />
              <QuoteBox text={"Ada asdfa  aasdd adf"} />

            </div>
            <div className="quotes-row">
              <QuoteBox text={"Addfff adfa a d"} />
              <QuoteBox text={"A sdfa sdfadfdf adf"} />
              <QuoteBox text={"Ad sdfafa sssd adf"} />
              <QuoteBox text={"Ad sdfass"} />

            </div>
          </section>
        </div>
      </div >

    </div >


  )
}