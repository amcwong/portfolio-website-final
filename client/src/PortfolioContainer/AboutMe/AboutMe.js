import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => fadeInSubscription.unsubscribe();
  }, [props.id]);

  const SCREEN_CONSTANTS = {
    description: `I'm a passionate developer who enjoys playing chess, rock climbing, and nature watching!
      Whether it is in research, medicine, or tech, my professional interests are grounded in improving quality of life. 
      I take great pride in my work and am always eager to collaborate with people who share my enthusiasm for making a positive impact.`,
    highlights: {
      bullets: [
        "Agentic AI Development",
        "Applied Machine Learning",
        "Bioinformatics Pipelines",
        "Full Stack Web Development",
        "Cloud Computing and Deployment",
      ],
      heading: "Here are some fields I have experience in:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <a href="mailto:amcwong613@gmail.com">
                <button className="btn primary-btn">Contact Me</button>
              </a>
              <a href="amcwong-resume.pdf" download="amcwong-resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
