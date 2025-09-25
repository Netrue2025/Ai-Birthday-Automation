import { Dashboard } from "./pages/dashboard"
import { Contacts } from "./pages/contacts"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return ( 
  <Router>
    <Routes>
      <Route path='/' element={ <Dashboard /> }></Route>
      <Route path='/contacts' element={ <Contacts /> }></Route>
      <Route path='/configuration' element={ <Contacts /> }></Route>
    </Routes>
  </Router>
  
  )
}

export default App
