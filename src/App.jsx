import { Dashboard } from "./pages/dashboard"
import { Contacts } from "./pages/contacts"
import { Wallet } from "./pages/wallet"
import { Configuration } from "./pages/configuration"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"


function App() {
  return ( 
  <Router>
    <Routes>
       <Route path='/' element={ <Home /> }></Route>
      <Route path='/dashboard' element={ <Dashboard /> }></Route>
      <Route path='/contacts' element={ <Contacts /> }></Route>
      <Route path='/configuration' element={ <Configuration /> }></Route>
      <Route path='/wallet' element={ <Wallet /> }></Route>

    </Routes>
  </Router>
  
  )
}

export default App
