import { useState } from "react"
import { Button } from "./button"
import "../styles/topnavbar.css"
import { Birthday } from "./birthday"
import { Socialevent } from "./socialevent"



export function Topnavbar(){
    const [content, setContent] = useState('birthday')
    return(
        <div className="topnavbar">
            
            <div className="topnavbutton">
                <Button name="Birthdays Message Authomation" click={() => setContent('birthday')} className="birthbtn"/>
                <Button name="Social Events" click={() => setContent('socialEvent')} className="socialbtn"/>
                <Button name="Religious Events" click={() => setContent('religiousEvent')} className="religiousbtn"/>
                <Button name="Anniversaries" click={() => setContent('anniversaries')} className="annibtn"/>
                <br />
            </div>

            
            <div className="topnavcontent">
                {content === "birthday" && 
                 <Birthday />
                }
                {content === "socialEvent" && 
                <Socialevent /> 
                }
                {content === "religiousEvent" && 
                <p>This is religious event contents</p> 
                }
                {content === "anniversaries" && 
                <p>This is anniversaries event contents</p> 
                }
            </div>

        </div>
    )
}