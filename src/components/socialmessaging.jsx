import "../styles/socialmessaging.css";
import { Link } from "react-router-dom";

export function Socialmessaging() {
  return (
    <div className="socialmessaging-container">
      <div className="socialmessaging-wrapper">
        <div className="social_messaging--title">
          <h3>Social Messaging</h3>
          <p>Welcome back - manage your message</p>
        </div>
        <form className="contact_wrapper">
          <label htmlFor="contact_wrapper">Select contacts</label>
          <label htmlFor="john-checkbox" className="contact-item">
            <div className="contact">
              <input type="checkbox" id="john-checkbox" />
              <span className="social_profile-img"></span>
              <p>
                <span className="contact_name">John Doe</span> <br />
                {"johndoe@example.com - +1234567890"}
              </p>
            </div>
            <>
              <p>2025-06-14</p>
            </>
          </label>
          <label htmlFor="jane-checkbox" className="contact-item">
            <div className="contact">
              <input type="checkbox" id="jane-checkbox" />
              <span className="social_profile-img"></span>
              <p>
                <span className="contact_name">Jane Smith</span> <br />
                {"jane@example.com - +19876543210"}
              </p>
            </div>
            <>
              <p>2025-08-22</p>
            </>
          </label>
          <div className="compose_message">
            <div className="compose-title">
              <h3>Composer</h3>
              <p>Ai-assisted</p>
            </div>
            <textarea
              className="textarea"
              placeholder="Write or generate a message..."
              name="Compose-message"
            ></textarea>

            <div className="composerbtn">
              <button className="composerbtn composerbtn-1">
                Generate with Ai
              </button>
              <button className="composerbtn composerbtn-2">
                Generate Image
              </button>
            </div>
            <label className="channel">
              Channel
              <div className="channel-items">
                <label htmlFor="whatsapp">
                  <input type="checkbox" id="whatsapp" />
                  Whatsapp
                </label>
                <label htmlFor="email">
                  <input type="checkbox" id="email" />
                  Email
                </label>
                <label htmlFor="sms">
                  <input type="checkbox" id="sms" />
                  SMS
                </label>
              </div>
            </label>
            <div className="broadcastbtn">
              <Link to="#" className="broadcastbtn broadcastbtn-1">
                Broadcast
              </Link>
              <Link to="#" className="broadcastbtn broadcastbtn-2">
                Preview
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="social-message-preview"></div>
    </div>
  );
}
