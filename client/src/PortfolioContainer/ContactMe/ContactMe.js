import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amcwong613",
    iconClass: "fa fa-linkedin",
    external: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wong___andrew/",
    iconClass: "fa fa-instagram",
    external: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/amcwong",
    iconClass: "fa fa-github",
    external: true,
  },
  {
    name: "Email",
    href: "mailto:andrew.wong8@icloud.com",
    iconClass: "fa fa-envelope",
    external: false,
  },
  {
    name: "Course notes",
    href: "https://amcwong.github.io/amcw-claude-code-workflow/",
    iconClass: "fa fa-book",
    external: true,
  },
];

export default function ContactMe(props) {
  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => fadeInSubscription.unsubscribe();
  }, [props.id]);

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Find me online"} title={"Links"} />
      <div className="central-form">
        <div className="social-links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              className="social-link-card"
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <i className={link.iconClass} aria-hidden="true"></i>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
