/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { Leftsidebar } from '../components/leftsidebar'
import { Inputbox } from '../components/inputbox'
import "../styles/contacts.css"
import "../styles/maincontainer.css"
import "../styles/leftsidebar.css"
import { useState } from 'react'
import { Form } from './test'


export function Contacts(){
   const [showAlert, setShowAlert] = useState(false);
    return(
        <div className='mainContainer'>
            {/* Left side bar */}
            <Leftsidebar  dashboard="dashboard2" contacts="contacts2" configuration="configuration2" wallet="wallet2"/>
           
            {/* Center Contents */}
            <div className='contactbody'>

                <div className='smheader'>
                    <h2>Contacts</h2>
                </div>

                {/* Search Bar */}
                <div className='searchcontainer'>
                    <div className='search2'>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchFA'/>
                        <input type="search" placeholder='Search' />
                    </div>
                     
                        <div className='addcontainer'>
                            <button onClick={() => setShowAlert(true)}>
                                <FontAwesomeIcon icon="fa-solid fa-plus" className='plus'/>
                                <span>Add</span>
                            </button>
                        </div>
                      {showAlert && (
                            <div className="overlay">
                            <div className="alert-box">
                                <h2>Contact Form</h2>
                                <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Enter name" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" rows="3" placeholder="Type message"></textarea>
                                </div>
                                </form>
                                <div className="actions">
                                <button className="btn btn-secondary" onClick={() => setShowAlert(false)}>
                                    Close
                                </button>
                                <button className="btn btn-success">Send</button>
                                </div>
                            </div>
                            </div>
                        )}
                </div>
       

                <div>
                    
                </div>
                
                <Inputbox name="John Doe" mail="johndoe@gmail.com" phone="+23476875656"/>
                <Inputbox name="Jane Smith" mail="janesmith@gmail.com" phone="+23476875656"/>
                <Inputbox name="Emily Davis" mail="emilydavis@gmail.com" phone="+23476875656"/>
                
               

            </div>

            {/* Right contents */}
            <div className='contact-right-contents'>
                <h3>Contact Details</h3>
                <p>Select a contact to see details and quick actions</p>
            </div>

        </div>

    )
}