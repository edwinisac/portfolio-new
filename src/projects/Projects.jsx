import "./projects.css";

import image1 from "../assets/project-images/image1.png"

export function Projects(){
    return(
        <div className="projects-container">
                    <div className="project">
            <div className="project_image">
                <img src={image1} alt="" />
            </div>
            <div className="title">Smart Shopping List</div>
        </div>
        </div>
    )
}