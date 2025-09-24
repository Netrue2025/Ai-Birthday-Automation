import { Dashboard } from "./pages/dashboard"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return ( 
  <Router>
    <Routes>
      <Route path='/' element={ <Dashboard /> }></Route>
    </Routes>
  </Router>
  
  )
}

export default App
