import Nav from './components/Nav/Nav'
import Main from './components/Hero/Hero'
import AddOns from './components/AddOns/AddsOns'
import Faq from './components/Faq/Faq'
import Testimonials from './components/Testimonials/Testimonials'

import { useMediaQuery } from 'react-responsive'

function App() {
  const navBreakPoint = useMediaQuery({
    minWidth: 730
  })
  const voidBreakPoint = useMediaQuery({
    minWidth: 800,
    maxWidth: 1159
  })

  return (
    <div >
      <Nav navBreakPoint={navBreakPoint} />
      <Main voidBreakPoint={voidBreakPoint} />
      <AddOns />
      <Faq />
      <Testimonials />
    </div>
  )
}

export default App
