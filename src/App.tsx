import Nav from './components/Nav'
import { useMediaQuery } from 'react-responsive'

function App() {
  const navBreakPoint = useMediaQuery({
    minWidth: 730
  })
  // const isLaptopOrDesktop = useMediaQuery({
  //   query: '(min-width: 730px)'
  // })

  return (
    <div >
      <Nav navBreakPoint={navBreakPoint} />
    </div>
  )
}

export default App
