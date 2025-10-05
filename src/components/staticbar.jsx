import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { Link } from 'react-router-dom'
import "../styles/leftsidebar.css"
import "../styles/centercontent.css"
import "../styles/rightsidebar.css"
import { Back } from "./back"

export function Staticbar(){
    return(
   
        <div className='mainContainer'>
            {/* Left side bar */}
            <div className='leftSideBar'>
            <div className='automatedBD'>
                <div className='round'>.</div>
                <h2>AUTO BIRTHDAY MESSAGES</h2>
            </div>
            <Link to="/">
                <div className='dashBoard'>
                    <FontAwesomeIcon icon="fa-regular fa-house" className='fa'/>
                    <h3>Dashboard</h3>
                </div>
            </Link>
            <div className='contacts'>
                <FontAwesomeIcon icon="fa-solid fa-user" className='fa'/>
                <h3>Contacts</h3>
            </div>
            <div className='wallet'>
                <FontAwesomeIcon icon="fa-solid fa-wallet" className='fa'/>
                <h3>Wallet</h3>
            </div>
            <div className='configuration'>
                <FontAwesomeIcon icon="fa-solid fa-gear" className='fa'/>
                <h3>Configuration</h3>
            </div>
            <Back />

            <div className='walletContainer'>
                <div className='wallet2'>
                <FontAwesomeIcon icon="fa-solid fa-wallet" className='fa'/>
                <h4>Wallet</h4>
                </div>
                <div className='addCoin'>
                <FontAwesomeIcon icon="fa-solid fa-plus" className='fa'/>
                <h4>Add Coin</h4>
                </div>
            </div>
            </div>

            {/*Content at the center*/}
    

            {/*Right side bar*/}
 
  
        </div>
    )
}