import "../styles/home.css"
import { Button } from "../components/button"
import { Link } from "react-router-dom"
import logo from "../assets/logo.PNG"


export function Home(){
    return(
        <section>
            <header>
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <nav>

                   <Link to={"/signup"}>
                        <Button className="signup_btn" name="Sign Up"/>
                    </Link>
                     <Link to="/dashboard">
                        <Button className="login_btn" name="Log In"/>
                     </Link>   
                    
                </nav>
            </header>
            <main>
            
                <h1>Revolutionazing automation in messages</h1>
                <h2>Make everyone special</h2>
                <p>Automate birthday wishes, anniversries,
                    social greetings and business emails
                    broadcast while you sleep
                </p>
                <Link to={"/signup"}>
                    <Button className="get_started" name="Get Started"/>
                </Link>
                    
               
                
            </main>
        </section>
    )
}