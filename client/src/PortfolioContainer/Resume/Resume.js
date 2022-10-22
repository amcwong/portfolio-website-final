import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 100 },
    { skill: "React JS", ratingPercentage: 100 },
    { skill: "React Native", ratingPercentage: 100 },
    { skill: "Node JS", ratingPercentage: 100 },
    { skill: "Python", ratingPercentage: 100 },
    { skill: "HTML", ratingPercentage: 100 },
    { skill: "CSS", ratingPercentage: 100 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: " 2022", toDate: "2022" },
      description:
        "A Portfolio website to showcase my skills and projects in one place.",
      subHeading:
        "Relevant Technologies: React JS, Bootstrap, Node.js, Express.js, Heroku",
    },
    {
      title: "Auto Dresser",
      duration: { fromDate: "Oct 2021", toDate: "Nov 2021" },
      description:
        "Developed a Python program to, from a list of phone numbers, text subscribers what type of clothes they should wear that day according to the weather in their area.",
      subHeading:
        "Relevant Technologies: Python, Python requests, Python Anywhere",
    },
    {
      title: "CheckMate",
      duration: { fromDate: "Jun 2022", toDate: "Current" },
      description:
        "A React Native application called CheckMate: a Tinder analogue that aims to connect and direct users looking for in-person chess.",
      subHeading: "Relevant Technologies: React Native, Figma",
    },
    {
      title: "University of Toronto Course Enroller",
      duration: { fromDate: "Sep 2022", toDate: "Oct 2022" },
      description:
        "A Python based executable program which utilizes Selenium Webdriver and ChromeDriver to automatically enroll students in non-waitlistable courses.",
      subHeading: "Relevant Technologies: Python, Selenium",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Toronto, Canada"}
        subHeading={
          "BACHELOR OF SCIENCE BIOINFORMATICS (DATA SCIENCE FOR GENOMICS)"
        }
        fromDate={"2021"}
        toDate={"Current"}
      />
      <ResumeHeading
        heading={"Ashbury College"}
        subHeading={"INTERNATIONAL BACCALAUREATE DIPLOMA"}
        fromDate={"2017"}
        toDate={"2021"}
      />
    </div>,

    // Work experience
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"TeacherOn"}
          subHeading={"Computer Science and Math Tutor"}
          fromDate={"May 2022"}
          toDate={"Present"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">asdf</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">asdf</span>
          <br />
          <span className="resume-description-text">asdf</span>
          <br />
          <span className="resume-description-text">asdf</span>
          <br />
        </div> */}
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Ashbury MSOE Center for Biomolecular Modeling"}
          subHeading={"Protein Modeling Team Member"}
          fromDate={"Sep 2018"}
          toDate={"May 2020"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"AcadeCap International School"}
          subHeading={"Science and Technology Camp Leader"}
          fromDate={"2022"}
          toDate={"Present"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"City of Ottawa"}
          subHeading={"Swimming Instructor and Lifeguard"}
          fromDate={"2022"}
          toDate={"Present"}
        />
      </div>
    </div>,

    // Programming skills
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    //   Projects
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    //   Interests
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="As someone who was initially dissuaded from pursuing programming because of a poor teacher, I sincerely enjoy making the learning experience enjoyable. I continue to tutor on the side as a university student and, outside of academics, have taught Tae Kwon Do and chess."
      />
      <ResumeHeading
        heading="Chess"
        description="Playing chess is like synthesizing the excitement of a full soccer match in 5 minutes. To engage in as much chess as I can I play for the University of Toronto's Blitz team, and managed the chess club at Ashbury College."
      />
      <ResumeHeading
        heading="Health and Wellness"
        description="The reason why I started programming was because my physical health problems prevented me from doing physical activity. I have overcome many hurdles by accounting for my health in every decision I make throughout the day!"
      />
    </div>,
  ];
  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffsetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt=":D"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffsetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE FROM SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"My Experience and Background"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
