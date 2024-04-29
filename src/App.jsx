import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Chessboard from './components/Chessboard/Chessboard'
import Rules from './pages/Rules'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/PlayNow" element={<Chessboard/>}/>
          <Route path="/rules" element={<Rules/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App