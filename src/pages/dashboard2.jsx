import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

import { Link } from 'react-router-dom'

export function Dashboard(){
    return(
   
        <div className='mainContainer'>


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
            <h2>DETAILS</h2>
            <div className='detailscontainer'>
                <div className='details'>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" className='personFA1'/>
                <div className='personDetails'>
                    <h3>John Doe</h3>
                    <p>Birthday: June 14</p>
                </div>
                </div>
                <div className='details'>
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" className='personFA'/>
                <div className='personDetails'>
                    <h3>Whatsapp</h3>
                    <p>+1234567890</p>
                </div>
                </div>
                <div className='details'>
                <FontAwesomeIcon icon="fa-solid fa-user-group" className='personFA'/>
                <div className='personDetails'>
                    <h3>Whatsapp</h3>
                    <p>Group</p>
                </div>

                </div>
                <div className='details'>
                <FontAwesomeIcon icon="fa-solid fa-envelope" className='personFA'/>
                <div className='personDetails'>
                    <h3>johndoe</h3>
                    <p>@gmail.com</p>
                </div>
                </div>
                <div className='details'>
                <FontAwesomeIcon icon="fa-solid fa-phone" className='personFA'/>
                <div className='personDetails'>
                    <h3>Mobile</h3>
                    <p>+1234567890</p>
                </div>
                </div>
                <div className='message'>
                <h3>Message</h3>
                <textarea name="" id="" placeholder='This is a random text'>This is a random text</textarea>
                </div>

            </div>

            </div>
            
        </div>
    )
}
