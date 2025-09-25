import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import "../styles/maincontainer.css"
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import { Link } from 'react-router-dom'
import { Leftsidebar } from '../components/leftsidebar'

import "../styles/contacts.css"

export function Contacts(){
    return(
        <div className='mainContainer'>
            <Leftsidebar />
        </div>

    )
}