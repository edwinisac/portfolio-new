import "./projects.css";


import image1 from "../assets/project-images/image1.png";

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
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div classNam1e="project-image">
          <img src={image1} alt="" />
        </div> */}
        <div className="title">{project.title}</div>
        <div className="actions">
          <div className="github section">
              <Github size="55px"  className="action-icons icon1"/>
          </div>
          <div className="demo section">
            <Eye size="55px"  className="action-icons icon2"/>
          </div>

        </div>
      </div>
            )
          })
        }
      </div>
    </div>
  );
}
