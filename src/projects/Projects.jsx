import "./projects.css";


// import image1 from "../assets/project-images/image1.png";

import {Github,Eye} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export function Projects() {

  const[projects,setProjects]=useState([]);

  useEffect(()=>{
    const getProjects=async()=>{
      try{
        const response=await axios.get("http://localhost:5000/projects")
        setProjects(response.data)
      }
      catch(error){
        console.error("error fetching projects",error);
      }
    }
    getProjects();
  },[])



  return (
    <div className="projects-container" id="projects">
      <p>Projects</p>
      <div className="container">
        {
          projects.map((project)=>{
            return(

        <div
        className="project" key={project.id}
        style={{
          backgroundImage: `url(project-images/${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
    
        <div className="title">{project.title}</div>
        <div className="actions">
          <a className="github section" href={project.github} target="_blank" rel="noopener noreferrer" >
              <Github size="55px"  className="action-icons icon1"/>
          </a>
          
          <a className="demo section" href={project.demo} target="_blank" rel="noopener noreferrer">
            <Eye size="55px"  className="action-icons icon2"/>
          </a>

        </div>
      </div>
            )
          })
        }
      </div>
    </div>
  );
}
