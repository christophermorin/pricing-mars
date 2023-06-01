import Nav from './components/Nav'
import Main from './components/Main'
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
      <Main />
    </div>
  )
}

export default App
