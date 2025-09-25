import "../styles/broadcast.css"

export function Broadcast(){
    return(
        <div className="broadcast-container">
            <div>
                <p>Welcome - manage your messages</p>
            </div>
            <div>
                <h3>Select contacts</h3>
            </div>
            <div className="contact-card">
                <div className="left-side">
                    <input type="checkbox" />
                    <span className="contact-img"></span>
                    <div className="contact-name">
                        <strong>John Doe</strong><br />
                        johndoe@example.com - +1234567890
                    </div>
                </div>
            </div>
        </div>
    )
}