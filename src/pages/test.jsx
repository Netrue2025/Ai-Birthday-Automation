import { useState } from "react";
import "../styles/test.css"

export function Form() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="app">
      <button className="btn btn-primary" onClick={() => setShowAlert(true)}>
        Open Form Alert
      </button>

      {showAlert && (
        <div className="overlay">
          <div className="alert-box">
            <h2>Contact Form</h2>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="3" placeholder="Type message"></textarea>
              </div>
            </form>
            <div className="actions">
              <button className="btn btn-secondary" onClick={() => setShowAlert(false)}>
                Close
              </button>
              <button className="btn btn-success">Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
