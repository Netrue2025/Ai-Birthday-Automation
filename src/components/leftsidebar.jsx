import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { Link } from "react-router-dom"
import "../styles/leftsidebar.css"
import logo from "../assets/logo.PNG"


export function Leftsidebar(props){
    return(
        <>
            {/* Left side bar */}
            <div className='leftSideBar'>
                <Link to={"/"}>
                    <div className='automatedBD'>
                        <div className='round'>
                            <img src={logo} alt="App logo" />
                        </div>
                        <h2>Text Automation</h2>
                    </div>
                </Link>

                <div className='menus'>
                    <Link to="/dashboard">
                        <div className={props.dashboard}>
                            <FontAwesomeIcon icon="fa-regular fa-house" className='fa'/>
                            <h3>Dashboard</h3>
                        </div>
                    </Link>

                    <Link to="/contacts">
                        <div className={props.contacts}>
                            <FontAwesomeIcon icon="fa-solid fa-user" className='fa'/>
                            <h3>Contacts</h3>
                        </div>
                    </Link>

                    <Link to="/configuration">
                            <div className={props.configuration}>
                                <FontAwesomeIcon icon="fa-solid fa-gear" className='fa'/>
                                <h3>Configuration</h3>
                            </div>
                    </Link>
                    <Link to="/wallet">
                        <div className={props.wallet}>
                            <FontAwesomeIcon icon="fa-solid fa-wallet" className='fa'/>
                            <h3>Wallet</h3>
                        </div>
                    </Link>
                </div>

               
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
        </>
    )

}
