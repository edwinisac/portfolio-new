import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import image from "../assets/profile.png";
import "./intro.css";

export function Intro() {
  const texts = [
    "Graduated in computer science",
    "learning Full Stack Development",
    "Trying to be a better human",
  ];

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
            <p className="text-changing">{texts[1]}</p>
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
