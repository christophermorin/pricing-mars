import Nav from './components/Nav/Nav'
import Main from './components/Hero/Hero'
import AddOns from './components/AddOns/AddsOns'
import Faq from './components/Faq/Faq'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import { useMediaQuery } from 'react-responsive'

function App() {
  const navBreakPoint = useMediaQuery({
    minWidth: 730
  })
  const voidBreakPoint = useMediaQuery({
    minWidth: 800,
    maxWidth: 1159
  })


  //TODO: set up a useEffect that looks for theme style in local, set if found, default light it not
  // place that var (light/dark) into state and use that in a class on div below.
  return (
    <div>
      <Nav navBreakPoint={navBreakPoint} />
      <Main voidBreakPoint={voidBreakPoint} />
      <AddOns />
      <Faq />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
