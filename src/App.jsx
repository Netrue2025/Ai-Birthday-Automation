import { Dashboard } from "./pages/dashboard"
import { Contacts } from "./pages/contacts"
import { Wallet } from "./pages/wallet"
import { Configuration } from "./pages/configuration"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return ( 
  <Router>
    <Routes>
      <Route path='/' element={ <Dashboard /> }></Route>
      <Route path='/contacts' element={ <Contacts /> }></Route>
      <Route path='/configuration' element={ <Configuration /> }></Route>
      <Route path='/wallets' element={ <Wallet /> }></Route>
    </Routes>
  </Router>
  
  )
}

export default App
