import { Link } from "react-router-dom";
import "../styles/signin.css";

export function Signin() {
  return (
    <form className="signin">
      <div className="signin_container">
        <div className="signin_title">
          <h1>ENVIO AUTO MESSAGES</h1>
          <h2>Welcome back</h2>
          <p>Sign in to continue</p>
        </div>
        <div className="signin_input">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="remember_me">
          <div className="remember_me-chkbx">
            <input type="checkbox" id="chkbx" />
            <label htmlFor="chkbx">Remember me</label>
          </div>
          <Link to={"#"} className="forgot_password-link">
            <span>Forgot password?</span>
          </Link>
        </div>
        <button className="signin-btn">Sign in</button>
        <div className="signin_footer">
          <p>New here?</p>
          <Link to={"/signup"} className="signup-link">
            <span>Create an account</span>
          </Link>
        </div>
      </div>
    </form>
  );
}
