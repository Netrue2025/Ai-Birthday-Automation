import "../styles/input.css"
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

export function Inputbox(){
    return(
        <div className="inputcontainer">
            <input type="checkbox" className="chkbox"/>
            <FontAwesomeIcon icon="fa-solid fa-circle" className="circle"/>
            <div className="name">
                <h5>John Doe</h5>
                <div className="namenext">
                    <p>johndoe@gmail.com</p>
                    <p>+23470636627</p>
                </div>
            </div>
            <p>2025-06-14</p>
        </div>
    )
}