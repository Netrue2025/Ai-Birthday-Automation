import { width } from "@fortawesome/free-brands-svg-icons/fa11ty";
import "../styles/socialmessaging.css";

export function Socialmessaging() {
  return (
    <div className="socialmessaging_container">
      <div className="social_messaging--title">
        <h3>Social Messaging</h3>
        <p>Welcome back - manage your message</p>
      </div>
      <form className="contact_wrapper">
        <label htmlFor="contact_wrapper">Select contacts</label>
        <div className="contact-item">
          <div className="contact">
            <input type="checkbox" />
            <span className="social_profile-img"></span>
            <p>
              <span className="contact_name">John Doe</span> <br />
              {"johndoe@example.com - +1234567890"}
            </p>
          </div>
          <>
            <p>2025-06-14</p>
          </>
        </div>
        <div className="contact-item">
          <div className="contact">
            <input type="checkbox" />
            <span className="social_profile-img"></span>
            <p>
              <span className="contact_name">Jane Smith</span> <br />
              {"jane@example.com - +19876543210"}
            </p>
          </div>
          <>
            <p>2025-08-22</p>
          </>
        </div>
        <div className="contact-item">
          <div className="contact">
            <input type="checkbox" />
            <span className="social_profile-img"></span>
            <p>
              <span className="contact_name">Mark Johnson</span> <br />
              {"mark@example.com - +15551234567"}
            </p>
          </div>
          <>
            <p>2025-10-05</p>
          </>
        </div>
        <div className="compose_message">
          <div className="compose-title">
            <h3>Composer</h3>
            <p>Ai-assisted</p>
          </div>
          <input
            type="text"
            className="textarea"
            placeholder="Write or generate a message..."
          />
        </div>
      </form>
    </div>
  );
}
