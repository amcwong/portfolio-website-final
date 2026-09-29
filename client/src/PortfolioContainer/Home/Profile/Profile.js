import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Andrew</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <TypeAnimation
                  sequence={[
                    "ReactJS",
                    1500,
                    "Node.js",
                    1500,
                    "MERN Stack",
                    1500,
                    "AWS",
                    1500,
                    "Machine Learning",
                    1500,
                    "Python Development",
                    1500,
                    "Data Visualization",
                    1500,
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "1em" }}
                  speed={15}
                />
              </h1>
              <span className="profile-role-tagline">
                Explore my complete academic and professional record below.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="mailto:andrew.wong8@icloud.com">
              <button className="btn primary-btn">Contact Me</button>
            </a>
            <a href="Andrew Wong CV.pdf" download="Andrew Wong CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            {/* <div>
              <a href="https://www.linkedin.com/in/andrew-wong-a8859a241/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div> */}
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
