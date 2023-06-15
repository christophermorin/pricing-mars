import FaqAccordian from "./FaqAccordian"
import { faqData } from "../../db/faqData"

export default function Faq() {
  return (
    <section style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <section className='container-medium' style={{ position: "relative" }}>
        <svg
          className="faq-img"
          data-testid="faq-side-img"
          xmlns="http://www.w3.org/2000/svg"
          width="412"
          height="412"
          viewBox="0 0 48 48"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linejoin="round" d="M42 43V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v18" />
            <path d="M24 22c-9.941 0-18 8.059-18 18v4h36v-4c0-9.941-8.059-18-18-18Z" />
            <path stroke-linecap="round" d="M8 31V8m8 16V14" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M31 14h11" />
            <path d="M17 42v-3c0-9.389 3.134-17 7-17s7 7.611 7 17v3" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40" />
            <path d="M7 35s10.35-1 17-1s17 1 17 1" />
          </g>
        </svg>
        {/* <img src='/space-colony.svg' className='faq-img' data-testid="faq-side-img" /> */}
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