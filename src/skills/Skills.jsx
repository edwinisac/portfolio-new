import { useEffect, useState } from "react";
import "./skills.css";
import axios from "axios";
export function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await axios.get("http://localhost:5000/skills");
        setSkills(response.data);
      } catch (error) {
        console.error("Error fetching skills", error);
      }
    };
    getSkills();
  }, []);

  return (
    <div className="skills-container" id="skills">
      <p>Things I Know</p>
      <ul className="skills-list">
        {skills.map((skill) => {
            return(
                <li className="skill" key={skill.id}>{skill.skill}</li>
            )
        })}
      </ul>
    </div>
  );
}
