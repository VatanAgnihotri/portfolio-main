import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

function Resume(props) {
  const [selectBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => (
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

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Mongo DB", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 70 },
    { skill: "AWS LAMBDA", ratingPercentage: 80 },
    { skill: "GITLAB CI/CD", ratingPercentage: 70 },
    { skill: "IONIC 3", ratingPercentage: 65 },
  ];

  const projectDetails = [
    {
      title: "Skylark",
      duration: { fromDate: "2018", toDate: "2020" },
      description:
        " An Employee Performance Management Application used by many Insurance Giants, Banking Giants, Hospitals, Government sectors and many more",
      subHeading: "Technologies Used: React JS, Node JS, MongoDB, Express JS",
    },
    {
      title: "My Sejahtera",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An application used by the Malaysian Government to keep track of people who are taking vaccination appointments and getting the vaccine doses by using many features like announcements for their next dosage date etc.",
      subHeading: "Technologies Used: Ionic 3, Node JS, MongoDB, Express JS",
    },
    {
      title: "DevCenter",
      duration: { fromDate: "2020", toDate: "present" },
      description:
        "AF central hub for developers, providing a collaborative space to create and share documentation and tools, as well as workflows to accelerate the code projects throughout the Software Development Life Cycle.",
      subHeading:
        "Technologies Used: React JS, Node JS, MongoDB, Express JS, AWS Lambda, ElasticSearch, Docker, Kubernetes, AWS S3, AWS Secret Manager",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Kurukshetra University, Kurukshetra"}
        subHeading={"BACHELOR OF TECHNOLOGY"}
        fromDate={"2014"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"SJPP, Damla"}
        subHeading={"DIPLOMA IN TECHNOLOGY"}
        fromDate={"2010"}
        toDate={"2014"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"LMJ Public School, Ambala"}
        fromDate={"2005"}
        toDate={"2010"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"NTT Data"}
        subHeading={"Software Development Advisor"}
        fromDate={"2024"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Working in the hospitality domain hotel booking management system
          used all over the globe where different users can plan and book their
          hotel bookings.
        </span>
      </div>
      <ResumeHeading
        heading={"Piktorlabs/UST GLOBAL"}
        subHeading={"Lead Software Developer"}
        fromDate={"2021"}
        toDate={"2024"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed a central hub for developers, providing a collaborative
          space to create and share documentation and tools, as well as
          workflows to accelerate the code projects throughout the Software
          Development Life Cycle.
        </span>
      </div>
      <ResumeHeading
        heading={"Entomo Technologies"}
        subHeading={"Product Engineer"}
        fromDate={"2018"}
        toDate={"2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed various parts and microservices of a Employee Performance
          Management Application used by many Insurance Giants, Banking Giants,
          Hospitals, Government sectors and many more.
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
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
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Continual Learning"
        subHeading="Apart from working as a Software Engineer, I do like to explore the new tech and always try to keep myself updated in terms of technology."
      />
      <ResumeHeading
        heading="Music"
        subHeading="Listening to the music is something I can never compromise with, skimming through Spotify's hip-hop songs charts is at times the best stress reliever that I can get my hands on."
      />
      <ResumeHeading
        heading="Gaming"
        subHeading="I like to challenge my reflexes a lot while playing RPG games, pushing through the games and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        key={index}
        onClick={() => handleCarousal(index)}
        className={
          index === selectBulletIndex ? "bullet selected-bullet" : "bullet"
        }
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops... no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
