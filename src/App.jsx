import { Dashboard } from "./pages/dashboard"
import { Contacts } from "./pages/contacts"
import { Wallet } from "./pages/wallet"
import { Configuration } from "./pages/configuration"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Signup } from "./pages/sign-up"
import { Signin }from"./pages/signin"
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import "./App.css"

function App() {
  return ( 
    <>
      <div className="relative">
        <Canvas>
           <ambientLight intensity={0.5} />
          <Stars radiu={50} count={2500} factor={4} fade speed={2} />
          <OrbitControls />
        </Canvas>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/dashboard' element={ <Dashboard /> }></Route>
          <Route path='/contacts' element={ <Contacts /> }></Route>
          <Route path='/configuration' element={ <Configuration /> }></Route>
          <Route path='/wallet' element={ <Wallet /> }></Route>
          <Route path='/signup' element={ <Signup /> }></Route>
          <Route path='/signin' element={ <Signin /> }></Route>

        </Routes>
      </Router>
    </>

  
  )
}

export default App
