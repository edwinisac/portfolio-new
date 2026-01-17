import { useState } from "react";
import "./contact.css";
import axios from "axios";


export function Contact(){
    const [name,setName]=useState("");
    const[mail,setMail]=useState("");
    const[number,setNumber]=useState(0)    
    const handleClick=()=>{
        axios.post("http://localhost:5000/contacts",{
            name:name,
            mail:mail,
            number:number
        })
    }
    
    return(
        <div className="contact-container" id="contact">
            <div className="form">
                <h1>Contact me</h1>
                <label htmlFor="name">Enter your Name</label>
                <input type="text" id="name" onChange={(e)=>{
                    setName(e.target.value);
                }} />
                <label htmlFor="mail">Enter your mail id</label>
                <input type="text" id="mail" onChange={(e)=>{
                    setMail(e.target.value);
                }} />
                <label htmlFor="number">Enter your contact Number</label>
                <input type="text" id="number" onChange={(e)=>{
                    setNumber(e.target.value)
                }} />
                <button onClick={handleClick}>send</button>
            </div>
        </div>
    )
}