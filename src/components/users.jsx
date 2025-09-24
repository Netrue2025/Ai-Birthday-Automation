import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { Link } from 'react-router-dom'

import "../styles/contacts.css"

export function Users(){
    return(
   
        <div className='mainContainer'>
            {/* Left side bar */}
            <div className='leftSideBar'>
            <div className='automatedBD'>
                <div className='round'>.</div>
                <h2>AUTO BIRTHDAY MESSAGES</h2>
            </div>
            <Link to="/">
                <div className='dashBoard back'>
                    <FontAwesomeIcon icon="fa-regular fa-house" className='fa'/>
                    <h3>Dashboard</h3>
                </div>
            </Link>
            <div className='contacts'>
                <FontAwesomeIcon icon="fa-solid fa-user" className='fa'/>
                <h3>Contacts</h3>
            </div>
            <Link to="/wallet">
                <div className='wallet'>
                    <FontAwesomeIcon icon="fa-solid fa-wallet" className='fa'/>
                    <h3>Wallet</h3>
                </div>
            </Link>

            <Link to="/">
                <div className='configuration'>
                    <FontAwesomeIcon icon="fa-solid fa-gear" className='fa'/>
                    <h3>Configuration</h3>
                </div>
            </Link>


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
            <div className='centerContainer'>
            <h1>BIRTHDAYS</h1>
            <div className='search'>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchFA'/>
                <input type="search" placeholder='Search' />
            </div>
            <div className='persons'>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" className='personFA1'/>
                <div className='details'>
                <h3>John Doe</h3>
                <p>June 14</p>
                </div>
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='personFA2'/>
            </div>
            <div className='persons'>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" className='personFA1'/>
                <div className='details'>
                <h3>Jane Smith</h3>
                <p>August 22</p>
                </div>
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='personFA2'/>
            </div>
            <div className='persons'>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" className='personFA1'/>
                <div className='details'>
                <h3>Emily Davis</h3>
                <p>November 16</p>
                </div>
                <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='personFA2'/>
            </div>
            </div>

            {/*Right side bar*/}
            <div className='rightSideBar'>
                <h2>ADD CONTACTS</h2>
                <div className='detailscontainer'>
                    <p>This is the section to add contacts</p>

                </div>

            </div>
  
        </div>
    )
}