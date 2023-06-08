import FaqAccordian from "./FaqAccordian"

export default function Faq() {
  return (
    <section style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      <section className='container-medium' style={{ position: "relative" }}>
        <img src='/stone-stack.svg' className='faq-img' />
        <h2 className='text-2'>Frequently Asked Questions</h2>
        <section className='faq-accordians-section' >
          {[1, 2, 3].map(faq => {
            return (
              <FaqAccordian id={faq} />
            )
          })}
        </section>
      </section>
    </section>
  )
}