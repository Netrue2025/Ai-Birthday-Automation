import { useState } from "react";

export function Socialevent() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button onClick={() => setShowForm(true)}>Open Form</button>

      {showForm && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>Sign Up</h2>
            <form>
              <div>
                <label>Name:</label>
                <input type="text" />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" />
              </div>
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Simple inline styles for demo ---
const overlayStyle = {
  position: "fixed",
  top: 0, left: 0,
  width: "100%", height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
};


