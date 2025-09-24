import { Dashboard } from './pages/dashboard.jsx'
import { Users } from './components/users.jsx'
import { Wallet } from './pages/wallet.jsx'
import { Configuration } from './pages/configuration.jsx'
import {HashRouter as Router, Routes, Route} from "react-router-dom"

import "./styles/leftsidebar.css"
import "./styles/centercontent.css"
import "./styles/rightsidebar.css"

function App() {
  return ( 
  <Router>

    <Routes>
      <Route path='/' element={ <Dashboard /> }></Route>
      <Route path='/users' element={ <Users /> }></Route>
      <Route path='/wallet' element={ <Wallet /> }></Route>
      <Route path='/config' element = {<Configuration />}></Route>
    </Routes>
  </Router>
  
  )
}

export default App
