import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../css/timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTensorflow, faCpp, faCsharp, faMongo } from "./Icons";
import style from "../assets/jss/work.js";
import { makeStyles } from "@material-ui/core/styles";

import { WorkExperiences } from "./Constants";

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
        {WorkExperiences.map((exp) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "black", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid black",
              }}
              date={exp.date}
              iconStyle={{ background: "black", color: "black" }}
              dateClassName={classes.date}
              icon={
                <img
                  src={exp.img}
                  width="100%"
                  height="100%"
                  className={classes.icon}
                />
              }
              iconOnClick={() => window.open(exp.link, "_blank")}
            >
              <h4 className="vertical-timeline-element-title">
                {exp.title}
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                {exp.company}
              </h5>
              <ul className={classes.jobdesc}>
                {
                  exp.points.map(point => {
                    return(
                      <li>{point}</li>
                    )
                  })
                }
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Work;
