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
    { skill: "Python", ratingPercentage: 100 },
    { skill: "R", ratingPercentage: 100 },
    { skill: "JavaScript", ratingPercentage: 100 },
    { skill: "HTML and CSS", ratingPercentage: 100 },
    { skill: "Java", ratingPercentage: 100 },
    { skill: "Dart", ratingPercentage: 100 },
    { skill: "SQL", ratingPercentage: 100 },
    { skill: "Haskell", ratingPercentage: 100 },
    { skill: "React JS", ratingPercentage: 100 },
    { skill: "Node JS", ratingPercentage: 100 },
  ];

  const projectsDetails = [
    {
      title: "My Portfolio Website",
      duration: { fromDate: "Sep 2022", toDate: "Jun 2024" },
      description:
        "Launched this website on Render with a React frontend and Node.js backend to present my skills.",
      subHeading:
        "Relevant Technologies: React JS, Bootstrap, Node.js, Express.js, CORS, MailGun",
    },
    {
      title: "University of Toronto Course Enroller",
      duration: { fromDate: "Sep 2022", toDate: "Oct 2022" },
      description:
        "A Python-based executable program which utilizes Selenium Webdriver and ChromeDriver to automatically enroll students in non-waitlistable courses.",
      subHeading: "Relevant Technologies: Python, Selenium",
    },
    {
      title: "CheckMate",
      duration: { fromDate: "Jun 2022", toDate: "Current" },
      description:
        "CheckMate is a Tinder analogue that aims to connect and direct users looking for in-person chess.",
      subHeading: "Relevant Technologies: React Native, Figma",
    },
    {
      title: "Auto Dresser",
      duration: { fromDate: "Oct 2021", toDate: "Nov 2021" },
      description:
        "Developed a Python program using PythonAnywhere to text subscribers of a mailing service what type of clothes they should wear that day according to the weather in their area.",
      subHeading:
        "Relevant Technologies: Python, OpenWeatherMap API, Twilio API, PythonAnywhere",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Toronto, Canada"}
        subHeading={
          "BACHELOR OF SCIENCE IN BIOINFORMATICS AND COMPUTER SCIENCE"
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
          heading={"Victoria University"}
          subHeading={"Undergraduate Researcher in Machine Learning"}
          fromDate={"Jan 2024"}
          toDate={"Current"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Factors Education"}
          subHeading={"Software Engineering Intern"}
          fromDate={"Sep 2022"}
          toDate={"Oct 2023"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"TeacherOn"}
          subHeading={"Computer Science and Math Tutor"}
          fromDate={"May 2022"}
          toDate={"Current"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"AcadeCap International School"}
          subHeading={"Science and Technology Camp Leader"}
          fromDate={"Jun 2022"}
          toDate={"Aug 2022"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"City of Ottawa"}
          subHeading={"Swimming Instructor and Lifeguard"}
          fromDate={"Sep 2019"}
          toDate={"Mar 2021"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Ashbury MSOE Center for Biomolecular Modeling"}
          subHeading={"Protein Modeling Team Member"}
          fromDate={"Sep 2018"}
          toDate={"May 2019"}
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
        description="I love chess! To engage in as much chess as I can I play for the University of Toronto's Blitz team. I also started the chess club at Ashbury College."
      />
      <ResumeHeading
        heading="Rock Climbing"
        description="Rock climbing is the first sport I got super involved with after I overcame some bad health problems. My health problems still prevent me from getting my heart rate too high. Luckily, rock climbing is not too cardio intensive!"
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
