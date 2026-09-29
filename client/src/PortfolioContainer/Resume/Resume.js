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
          ) : props.fromDate ? (
            <div className="heading-date">{props.fromDate}</div>
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
        {props.link ? (
          <div className="resume-heading-link">
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.linkLabel || "View on GitHub"}
            </a>
          </div>
        ) : null}
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Awards", logoSrc: "education.svg" },
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
      title: "endoSignatureR",
      description:
        "A small-sample, leakage-safe R pipeline for discovering interpretable gene signatures from bulk RNA-seq endometrial lesion data (two-group setting), with classification, nested CV training, and a Shiny app.",
      subHeading: "Relevant Technologies: R, Bioconductor, limma, Shiny",
      link: "https://github.com/amcwong/endoSignatureR",
    },
    {
      title: "amcw-claude-code-workflow",
      description:
        "A ready-to-fork Claude Code template for academics using LaTeX/Beamer and R, with multi-agent review, quality gates, adversarial QA, and a Quarto course-notes publishing loop.",
      subHeading: "Relevant Technologies: Claude Code, Quarto, LaTeX, R",
      link: "https://github.com/amcwong/amcw-claude-code-workflow",
    },
    {
      title: "daily-obsidian-vault",
      description:
        "A reusable Obsidian vault configuration for daily journaling, tldr-first reference notes, and life-organization workflows you can fork and adapt.",
      subHeading: "Relevant Technologies: Obsidian, Templater, Markdown",
      link: "https://github.com/amcwong/daily-obsidian-vault",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <h3 className="resume-mobile-section-title">Education</h3>
      <ResumeHeading
        heading={"University of Toronto"}
        subHeading={"Master of Science in Applied Computing — AI in Healthcare"}
        fromDate={"Sep 2026"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"University of Toronto"}
        subHeading={
          "Bachelor of Science in Bioinformatics and Computer Science (cGPA 3.85/4.00)"
        }
        fromDate={"Sep 2021"}
        toDate={"Jun 2026"}
      />
    </div>,

    <div className="resume-screen-container" key="awards">
      <h3 className="resume-mobile-section-title">Awards</h3>
      <ResumeHeading
        heading={"Mitacs Accelerate Research Fellowship"}
        subHeading={"Ontario Institute for Studies in Education (OISE)"}
        description={
          "Awarded a $120,000 Mitacs Accelerate grant supporting AI research in partnership with Factors Education and OISE."
        }
        fromDate={"Apr 2025"}
        toDate={"Jun 2026"}
      />
      <ResumeHeading
        heading={"Vic Global Scholarship"}
        subHeading={"Victoria University, University of Toronto"}
        description={
          "Received a $2,000 Vic Global scholarship to present research methodology and outcomes at the Lisbon Scientonomy Workshop 2024."
        }
        fromDate={"2024"}
      />
      <ResumeHeading
        heading={"Merit Award Scholarship"}
        subHeading={"Ashbury College"}
        description={
          "Approximately $20,000 per year; received each year from 2017 to 2021."
        }
        fromDate={"2017"}
        toDate={"2021"}
      />
    </div>,

    // Work experience
    <div
      className="resume-screen-container work-history-container"
      key="work-experience"
    >
      <h3 className="resume-mobile-section-title">Work History</h3>
      <div className="experience-container">
        <ResumeHeading
          heading={"OISE, University of Toronto"}
          subHeading={"AI Developer — Mitacs Accelerate Research Fellowship"}
          fromDate={"Apr 2025"}
          toDate={"Jun 2026"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Fable Therapeutics"}
          subHeading={"Machine Learning Scientist Intern"}
          fromDate={"Sep 2025"}
          toDate={"May 2026"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Woodin Lab, University of Toronto"}
          subHeading={"Undergraduate Researcher in Computational Neuroscience"}
          fromDate={"Sep 2024"}
          toDate={"Jun 2025"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Factors Education"}
          subHeading={"Software Engineer"}
          fromDate={"May 2024"}
          toDate={"Sep 2024"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Victoria University"}
          subHeading={"Undergraduate Researcher in Natural Language Processing"}
          fromDate={"Jan 2024"}
          toDate={"May 2024"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Factors Education"}
          subHeading={"Software Developer Intern"}
          fromDate={"Sep 2022"}
          toDate={"Sep 2023"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"TeacherOn"}
          subHeading={"Computer Science and Math Tutor"}
          fromDate={"May 2021"}
          toDate={"Jun 2025"}
        />
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Ashbury MSOE SMART Team"}
          subHeading={"Student Researcher, Biomolecular Modeling"}
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
      <h3 className="resume-mobile-section-title">Programming Skills</h3>
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
    <div className="resume-screen-container projects-container" key="projects">
      <h3 className="resume-mobile-section-title">Projects</h3>
      {projectsDetails.map((project, index) => (
        <ResumeHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration?.fromDate}
          toDate={project.duration?.toDate}
          link={project.link}
        />
      ))}
    </div>,
    //   Interests
    <div className="resume-screen-container" key="interests">
      <h3 className="resume-mobile-section-title">Interests</h3>
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
    let offsetHeight = 620;

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
