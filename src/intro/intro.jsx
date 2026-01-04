import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import image from "../assets/profile.png";
import "./intro.css";
import { useEffect, useState } from "react";

export function Intro() {
  const texts = [
    "Graduated in computer science",
    "learning Full Stack Development",
    "Trying to be a better human",
  ];

  const[text,setText]=useState("");
  const[index,setIndex]=useState(0);
  const[isDeleting,setIsDeleting]=useState(false);



  useEffect(()=>{
    let current=texts[index];
    let speed=isDeleting?50:100;
    const timeOut=setTimeout(()=>{
      if(!isDeleting){
        setText(current.substring(0,text.length+1))
      }
      else{
        setText(current.substring(0,text.length-1))
      }
      if(!isDeleting&&text===current){
        setTimeout(()=>{
          setIsDeleting(true)
        },1000)
      }
      if(isDeleting&&text===""){
        setTimeout(()=>{
          setIsDeleting(false);
          setIndex((prev)=>(prev+1)%texts.length);
        },1000)
      }
    },speed)


    return()=>clearTimeout(timeOut);
  },[text,index,isDeleting])
  return (
    <div className="intro" id="home">
      <div className="details">
        <div className="text">
          <div className="design">
            <div className="red circle"></div>
            <div className="yellow circle"></div>
            <div className="green circle"></div>
          </div>

          <div className="about">
            <p className="text-name">Hii, I'm Edwin Isac</p>
            <p className="text-fixed">I'm a Full Stack Developer</p>
            <p className="text-changing">{text}
            <span className="cursor">█</span>
            </p>
          </div>
        </div>

        <div className="icons">
          <ul className="icons-list">
            <li className="icon">
              <Linkedin size="30px" />
            </li>
            <li className="icon">
              <Instagram size="30px" />
            </li>
            <li className="icon">
              <Github size="30px" />
            </li>
            <li className="icon">
              <Mail size="30px" />
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img src={image} alt="" className="profile" />
      </div>
    </div>
  );
}
