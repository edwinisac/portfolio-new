import "./projects.css";

import image1 from "../assets/project-images/image1.png";

import {Github,Eye} from "lucide-react";

export function Projects() {
  return (
    <div className="projects-container" id="projects">
      <p>Projects</p>
      <div className="container">
        <div
          className="project"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <div classNam1e="project-image">
            <img src={image1} alt="" />
          </div> */}
          <div className="title">Smart Shopping List</div>
          <div className="actions">
            <div className="github section">
                <Github size="55px"  className="action-icons icon1"/>
            </div>
            <div className="demo section">
              <Eye size="55px"  className="action-icons icon2"/>
            </div>

          </div>
        </div>


        <div
          className="project"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <div classNam1e="project-image">
            <img src={image1} alt="" />
          </div> */}
          <div className="title">Smart Shopping List</div>
          <div className="actions">
            <div className="github section">
                <Github size="55px"  className="action-icons icon1"/>
            </div>
            <div className="demo section">
              <Eye size="55px"  className="action-icons icon2"/>
            </div>

          </div>
        </div>



        <div
          className="project"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <div classNam1e="project-image">
            <img src={image1} alt="" />
          </div> */}
          <div className="title">Smart Shopping List</div>
          <div className="actions">
            <div className="github section">
                <Github size="55px"  className="action-icons icon1"/>
            </div>
            <div className="demo section">
              <Eye size="55px"  className="action-icons icon2"/>
            </div>

          </div>
        </div>

        <div
          className="project"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <div classNam1e="project-image">
            <img src={image1} alt="" />
          </div> */}
          <div className="title">Smart Shopping List</div>
          <div className="actions">
            <div className="github section">
                <Github size="55px"  className="action-icons icon1"/>
            </div>
            <div className="demo section">
              <Eye size="55px"  className="action-icons icon2"/>
            </div>

          </div>
        </div>


        <div
          className="project"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <div classNam1e="project-image">
            <img src={image1} alt="" />
          </div> */}
          <div className="title">Smart Shopping List</div>
          <div className="actions">
            <div className="github section">
                <Github size="55px"  className="action-icons icon1"/>
            </div>
            <div className="demo section">
              <Eye size="55px"  className="action-icons icon2"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
