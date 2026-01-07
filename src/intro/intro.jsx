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

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let current = texts[index];
    let speed = isDeleting ? 50 : 100;
    const timeOut = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
      } else {
        setText(current.substring(0, text.length - 1));
      }
      if (!isDeleting && text === current) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      }
      if (isDeleting && text === "") {
        setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1000);
      }
    }, speed);

    return () => clearTimeout(timeOut);
  }, [text, index, isDeleting]);
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
            <p className="text-changing">
              {text}
              <span className="cursor">█</span>
            </p>
          </div>
        </div>

        <div className="icons">
          <ul className="icons-list">
            <li className="icon">
              <a href="https://linkedin.com/in/edwin-isac/" target="_blank">
                <Linkedin size="30px" />
              </a>
            </li>
            <li className="icon">
              <a href="https://www.instagram.com/edwin_isac_/" target="_blank" aria-label="visit my instagram profile">
                <Instagram size="30px" />
              </a>
            </li>
            <li className="icon">
              <a href="https://github.com/edwinisac" target="_blank">
                <Github size="30px" />
              </a>
            </li>
            <li className="icon">
              <a
                href="mailto:edwinisackanjirathinkal@gmail.com "
                target="_blank"
              >
                <Mail size="30px" />
              </a>
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
