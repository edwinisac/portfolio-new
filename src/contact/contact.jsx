import "./contact.css";

export function Contact(){
    return(
        <div className="contact-container">
            <div className="form">
                <h1>Contact me</h1>
                <label htmlFor="name">Enter your Name</label>
                <input type="text" id="name" placeholder="Fill your name" />
                <label htmlFor="mail">Enter your mail id</label>
                <input type="text" id="mail" placeholder="example@gmail.com" />
                <label htmlFor="number">Enter your contact Number</label>
                <input type="text" id="number" placeholder="+91 1234567890" />
                <button>send</button>
            </div>
        </div>
    )
}