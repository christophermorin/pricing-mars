import { quoteData } from "../../db/quoteData"

import QuoteBox from "./QuoteBox"

export default function Testimonials() {
  return (
    <div style={{ paddingBottom: "120px" }}>
      <div className="container-medium">
        <h2 className="text-2 testimonial-header">Words from our survivors!</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src="/fivestars.png" />
            <span style={{ textAlign: "center" }}>5 of these things!</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <img src="/fivestars-red.png" />
            <span style={{ textAlign: "center" }}>5 more shiny things!</span>
          </div>

        </div>

        <div className="overflow">
          <section className="testimonial-container">
            <div className="quotes-row">
              {quoteData.row1.map(content => {
                return (
                  <QuoteBox text={content} />
                )
              })}
            </div>
            <div className="quotes-row">
              {quoteData.row2.map(content => {
                return (
                  <QuoteBox text={content} />
                )
              })}
            </div>
            <div className="quotes-row">
              {quoteData.row3.map(content => {
                return (
                  <QuoteBox text={content} />
                )
              })}
            </div>
            {/* <div className="quotes-row">
              <QuoteBox text={"Kitty!"} />
              <QuoteBox text={"Adjsks aa asdadd aas"} />
              <QuoteBox text={"Adjsks asdadddas"} />
              <QuoteBox text={"Adjsks asda ass"} />
              <QuoteBox text={"Adjsks asda ass"} />
            </div>
            <div className="quotes-row">
              <QuoteBox text={"Adjsks asdasdasasds"} />
              <QuoteBox text={"Adjs sdfafa ad"} />
              <QuoteBox text={"Ada asdfa  aasdd adf"} />
              <QuoteBox text={"Ada asdfa  aasdd adf"} />
            </div>
            <div className="quotes-row">
              <QuoteBox text={"Addfff adfa a d"} />
              <QuoteBox text={"A sdfa sdfadfdf adf"} />
              <QuoteBox text={"Ad sdfafa sssd adf"} />
              <QuoteBox text={"Ad sdfass"} />
              <QuoteBox text={"Ad sdfass"} />
              <QuoteBox text={"Ad sdfass"} />
            </div> */}
          </section>
        </div>
      </div >

    </div >


  )
}