import {BrowserRouter,Link} from 'react-router'
import { NavBar } from './component/Navbar'
function App() {

  return (
    <>
        <Router>
          <Route  path='/' element={<NavBar />}/>

        
        </Router>
      

    </>
  )
}

export default App
