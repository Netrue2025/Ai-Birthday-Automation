import "../styles/rightsidebar.css"

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

export function Rightsidebar(props){
    return(
        
        <div className='rightSideBar'>
                {/*Right side bar*/}
            <div className='detailscontainer'>
                <div className='details'>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" className='personFA1'/>
                <div className='personDetails'>
                    <h3>{props.name}</h3>
                    <p>Birthday: June 14</p>
                </div>
                </div>
                <div className='details'>
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" className='personFA'/>
                <div className='personDetails'>
                    <h3>{props.whatsapp}</h3>
                    <p>{props.phone}</p>
                </div>
                </div>
                <div className='details'>
                <FontAwesomeIcon icon="fa-solid fa-user-group" className='personFA'/>
                <div className='personDetails'>
                    <h3>{props.whatsappgroup}</h3>
                    <p>{props.link}</p>
                </div>

                </div>
                <div className='details'>
                <FontAwesomeIcon icon="fa-solid fa-envelope" className='personFA'/>
                <div className='personDetails'>
                    <p>{props.fname}{props.email} </p>
                </div>
                </div>
                <div className='details'>
                <FontAwesomeIcon icon="fa-solid fa-phone" className='personFA'/>
                <div className='personDetails'>
                    <h3>{props.mobilename}</h3>
                    <p>{props.mobile}</p>
                </div>
                </div>
                <div className='message'>
                <h3>Message</h3>
                <textarea name="" id="" placeholder={props.message}>{props.message}</textarea>
                </div>

            </div>
        </div>             
      
    )


}