import Nav from './components/Nav/Nav'
import Main from './components/Hero/Hero'
import AddOnCard from './components/AddOnCard/AddOnCard'

import FaqAccordian from './components/Faq/FaqAccordian'
import { useMediaQuery } from 'react-responsive'

function App() {
  const navBreakPoint = useMediaQuery({
    minWidth: 730
  })
  const voidBreakPoint = useMediaQuery({
    minWidth: 800,
    maxWidth: 1159
  })

  //TODO: Addon and FAQ currently temp styling.

  return (
    <div >
      <Nav navBreakPoint={navBreakPoint} />
      <Main voidBreakPoint={voidBreakPoint} />
      <section className='container-medium'>
        {/* Add on section */}
        <h2 className='text-2 addOn-header'>Addons Header</h2>
        <div className=' addOns-container'>
          {/* TODO:Add to db and map to populate cards instead */}
          <AddOnCard />
          <AddOnCard />
          <AddOnCard />
        </div>
      </section>
      <section className='' style={{ height: "500px", border: "1px solid red" }}>
        {/* Temp structure */}
        {/* Faq section */}
        <div className='container-medium' style={{ border: "1px solid blue", height: "100%" }}>
          <h2 className='text-2'>Frequently Asked Questions</h2>
          <section className='faq-container'>
            {[1, 2, 3].map(faq => {
              return (
                <FaqAccordian id={faq} />
              )
            })}
          </section>
        </div>
      </section>
    </div>
  )
}

export default App
