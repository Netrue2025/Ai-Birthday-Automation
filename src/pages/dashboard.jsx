import { Leftsidebar } from "../components/leftsidebar"
import { Topnavbar } from "../components/topnavebar"
import "../styles/maincontainer.css"


export function Dashboard(){
  return(
    <div className='mainContainer'>
      <Leftsidebar dashboard="dashboard" contacts="contacts" configuration="configuration" wallet="wallet"/>
      <Topnavbar />
    </div>
  )
}    
