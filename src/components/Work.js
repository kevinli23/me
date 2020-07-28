import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTensorflow, faCpp, faCsharp, faMongo } from "./Icons";
import style from "../assets/jss/work.js";
import { makeStyles } from "@material-ui/core/styles";
import odaia from "../assets/images/odaia.png";
import intelex from "../assets/images/intelex.png";
import uw from "../assets/images/uw.png";
import tdsb from "../assets/images/tdsb.png";

const useStyles = makeStyles(style);

const Work = () => {
  const classes = useStyles();
  return (
    <div className={`experience ${classes.workpage}`}>
      <h2>Experience</h2>
      <hr />
      <VerticalTimeline
        style={{
          backgroundColor: "black",
        }}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2020 - Aug 2020"
          iconStyle={{ background: "black", color: "black" }}
          dateClassName={classes.date}
          icon={
            <img src={odaia} width="100%" height="100%" className={classes.icon} />
          }
        >
          <h4 className="vertical-timeline-element-title">Software Engineer</h4>
          <h5 className="vertical-timeline-element-subtitle">
            Odaia Intelligence
          </h5>
          <div className={classes.jobdesc}>
            <p>
              • Developed supporting scripts with Pandas and NumPy that created
              simulated test data that mimicked real data for model creation and
              for hyper tuning model parameters
            </p>
            <p>
              • Researched and develop a regression model that helped better
              estimate aggregated volumes
            </p>
            <p>
              • Utilized various LSTM models (Stacked, Phased, Time) with Keras
              in order to develop models that were used to predict time
              sensitive information
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Sep 2019 - Dec 2019"
          iconStyle={{ background: "black", color: "black" }}
          dateClassName={classes.date}
          icon={
            <img src={uw} width="100%" height="100%" className={classes.icon} />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Teaching Assistant
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            University of Waterloo
          </h6>
          <div className={classes.jobdesc}>
            <p>
              • A Teaching Assistant for the course Algebra for Honours
              Mathematics (MATH 135)
            </p>
            <p>• Graded and provided feedback to weekly math assignments</p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2019 - Aug 2019"
          iconStyle={{ background: "black", color: "black" }}
          dateClassName={classes.date}
          icon={
            <img src={intelex} width="100%" height="100%" className={classes.icon} />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Software Developer
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            Intelex Technologies Inc.
          </h6>
          <div className={classes.jobdesc}>
            <p>
              • Assisted for design and architecture of framework for storing
              geography locations using C# and .NET
            </p>
            <p>
              • Created proof of concept visualization of geography data using
              Google Maps API and JavaScript
            </p>
            <p>
              • Worked in two-week sprints with React, JavaScript, C# and SQL to fix urgent platform defects and refactor outdated code
            </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Jul 2018 - Aug 2018"
          iconStyle={{ background: "black", color: "black" }}
          dateClassName={classes.date}
          icon={
            <img src={tdsb} width="100%" height="100%" className={classes.icon} />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Robotics Mentor
          </h4>
          <h6 className="vertical-timeline-element-subtitle">
            Toronto District School Board
          </h6>
          <div className={classes.jobdesc}>
            <p>
              • Planned and supervised team building activities to build leadership and teamwork among the campers.
            </p>
            <p>
              • Lead group discussions with coworkers from various groups in order to prepare competitive and inclusive activities.
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Work;
