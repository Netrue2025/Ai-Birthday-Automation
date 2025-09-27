// React functions
import { useState } from "react"
import { Link } from 'react-router-dom'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

//Styles
import "../styles/centercontent.css"
import "../styles/birthday.css"

//Components
import { Rightsidebar } from "./rightsidebar"



export function Birthday(){
    const [preview, setPreview] = useState('')
    return(
        <div className="mainbirthday">
            <div className="bodycontent">
                {/*Content at the center*/}
                <div className='centerContainer'>
                    <h1>Birthdays</h1>
                    <div className='search'>
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='searchFA'/>
                        <input type="search" placeholder='Search' />
                    </div>
                    <div className='persons' onClick={() => setPreview("user1")}>
                        <FontAwesomeIcon icon="fa-regular fa-circle-user" className='personFA1'/>
                        <div className='details'>
                        <h3>John Doe</h3>
                        <p>June 14</p>
                        </div>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='personFA2'/>
                    </div>
                    <div className='persons' onClick={() => setPreview("user2")}>
                        <FontAwesomeIcon icon="fa-regular fa-circle-user" className='personFA1'/>
                        <div className='details'>
                        <h3>Jane Smith</h3>
                        <p>August 22</p>
                        </div>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='personFA2'/>
                    </div>
                    <div className='persons' onClick={() => setPreview("user3")}>
                        <FontAwesomeIcon icon="fa-regular fa-circle-user" className='personFA1'/>
                        <div className='details'>
                        <h3>Emily Davis</h3>
                        <p>November 16</p>
                        </div>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='personFA2'/>
                    </div>
                </div>
            

    
            </div>
            <div className="userdetails">
                <div><h2>Details</h2></div>
                {preview === "user1" &&
                <Rightsidebar name="John Doe" message="This is the message ment for John" phone="+2347062671100" mobile="+4473456789" mobilename="Mobile" fname="John" email="@gmail.com" whatsappgroup="Whatsapp group" link={"whatsapp.com/" + Math.random()} whatsapp="Whatsapp"/>}

                {preview === "user2" &&
                <Rightsidebar name="Jane Smith" message="This is the message ment for Jane" phone="+23470340560" mobile="+14667447789" mobilename="Mobile" fname="Jane" email="@gmail.com" whatsappgroup="Whatsapp group" link={"whatsapp.com/" + Math.random()} whatsapp="Whatsapp"/>}

                {preview === "user3" &&
                <Rightsidebar name="Emily Davis" message="This is the message ment for Emily" phone="+2347062671100" mobile="+1233456789" mobilename="Mobile" fname="Emily" email="@gmail.com" whatsappgroup="Whatsapp group" link="whatsapp.com/uywb3hsh" whatsapp="Whatsapp"/>}
            </div>
        </div>


    )
}