import FaqAccordian from "./FaqAccordian"
import { faqData } from "../../db/faqData"

export default function Faq() {
  return (
    <section style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <section className='container-medium' style={{ position: "relative" }}>
        <img src='/stone-stack.svg' className='faq-img' data-testid="faq-side-img" />
        <h2 className='text-2 faq-h2'>Frequently Asked Questions</h2>
        <section className='faq-accordians-section' >
          {faqData.map(faq => {
            return (
              <FaqAccordian key={faq.id} faq={faq} />
            )
          })}
        </section>
      </section>
    </section>
  )
}