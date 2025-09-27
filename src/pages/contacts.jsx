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


export function Contacts(){
    return(
        <div className='mainContainer'>
            <Leftsidebar  dashboard="dashboard2" contacts="contacts2" configuration="configuration2" wallet="wallet2"/>
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
                        <FontAwesomeIcon icon="fa-solid fa-plus" className='plus'/>
                        <span>Add</span>
                    </div>
                </div>

                <div>
                    
                </div>
                
                <Inputbox name="John Doe" mail="johndoe@gmail.com" phone="+23476875656"/>
                <Inputbox name="Jane Smith" mail="janesmith@gmail.com" phone="+23476875656"/>
                <Inputbox name="Emily Davis" mail="emilydavis@gmail.com" phone="+23476875656"/>
                
               

            </div>

        </div>

    )
}