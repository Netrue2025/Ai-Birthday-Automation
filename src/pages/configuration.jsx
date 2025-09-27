import { Leftsidebar } from "../components/leftsidebar"
import "../styles/config.css"
import { Button } from "../components/button"

export function Configuration(){
    return(
        <>
          <div className="mainContainer">
            {/* Left side bar */}
            <Leftsidebar  dashboard="dashboard4" contacts="contacts4" configuration="configuration4" wallet="wallet4"/>
            
            {/* Middle contents */}
            <div className="setting-container" >
                <div className="setting-header">
                    <h3>Settings</h3>
                    <p>Welcome back - manage your messages</p>
                </div>
                
                {/* Form section  */}
                <form action="" className="form">
                    <div className="broadcast-email">
                        <h4>Broadcast Email</h4>
                        <input type="email" placeholder="broadcast@gmail.com"/>
                    </div>
                    <div className="broadcast-phone">
                        <h4>Broadcast Phone</h4>
                        <input type="phone" placeholder="+1234567890"/>
                    </div>

                    <label htmlFor="whatsapp">
                        <div className="config-checkbox">
                            <input type="checkbox" id="whatsapp"/>
                            <p>Enable WhatsApp integration</p>
                        </div>
                     </label>
                    <Button name="Save" className="settings-save-btn"/>

                    
                </form>
               
            </div>
          </div>
    
        </>
    )
}