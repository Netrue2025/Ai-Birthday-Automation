import { Button } from "../components/button"
import { Link } from "react-router-dom"
import "../styles/signup.css"

export function Signup(){
    return(
        <div className="signup">
            <div className="signup_container">
                <div className="first_section">
                    <h1>ENVIO AUTO MESSAGES</h1>
                    <h2>Create an Account</h2>
                    <p>Step 1 of 2: Account Details</p>
                </div>
                <div className="name">
                    <input type="name" placeholder="First name" />
                    <input type="name" placeholder="Last Name" id="lastname"/>
                </div>
                <div className="email password">
                    <input type="email"  placeholder="Email Address"/>
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password"/>
                </div>
                <Button className="signup_btn" name="Sign Up"/>
                <div className="already">
                    <p>Already have an account?</p>
                    <Link to={"/signin"} className="link">
                        <span>Sign in</span>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}