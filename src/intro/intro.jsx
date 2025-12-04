import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import image from "../assets/profile.png";
import "./intro.css";

export function Intro() {
  return (
    <div className="intro">
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
            <p className="text-changing">Graduated in computer science</p>
          </div>
        </div>
        <div className="icons">
          <ul className="icons-list">
            <li className="icon">
              <Linkedin />
            </li>
            <li className="icon">
              <Instagram />
            </li>
            <li className="icon">
              <Github />
            </li>
            <li className="icon">
              <Mail />
            </li>
          </ul>
        </div>
      </div>
      <div className="image">
        <img src={image} alt="" className="profile" />
        <div className="cover"> </div>
      </div>
    </div>
  );
}
