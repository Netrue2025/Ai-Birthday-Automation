import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import "../styles/wallet.css"
import { Link } from 'react-router-dom'
import { Leftsidebar } from '../components/leftsidebar'


export function Wallet(){
    return(
   
        <div className='mainContainer'>
            {/* Left side bar */}
            <Leftsidebar  dashboard="dashboard3" contacts="contacts3" configuration="configuration3" wallet="wallet3"/>

  
        </div>
    )
}