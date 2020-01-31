import React from "react";
import { makeStyles } from "@material-ui/core";
import uwlogo from "../res/uw.png";
import { Courses } from "./Constants";
import { Box } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import style from "../assets/jss/education.js";

const useStyles = makeStyles(style);

const listCourses = (arr, classes) => {
  return arr.map(item => {
    return (
      <Box display="flex" flexDirection="row">
        <a href={item.link} rel="noopener noreferrer" target="_blank">
          <div className={classes.course}>{item.code}</div>
        </a>
        <div className={classes.courseName}>
          {item.bold ? <b>{item.name}</b> : <div>{item.name}</div>}
        </div>
      </Box>
    );
  });
};

const Education = () => {
  const classes = useStyles();
  const phone = useMediaQuery("(max-width:425px)");

  return (
    <div className={`education ${classes.educationpage}`}>
      <Fade>
        <h2>Education</h2>
        <hr />
        <Box display="flex" flexDirection="row" className={classes.box}>
          {!phone ? <img className={classes.logo} src={uwlogo} /> : <div />}
          <div>
            <h3 className={classes.title}>University of Waterloo</h3>
            <h5 className={classes.description}>
              Bachelor of Computer Science | 2018 - 2023
            </h5>
            <h5 className={classes.averages}>CGPA:&nbsp;&nbsp;3.85</h5>
            <h5 className={classes.averages}>
              CAV:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;87.60
            </h5>
            <h4 className={classes.subtitle}>Scholarships:</h4>
            <p className={classes.bullet}>• B.P. Dammizio Scholarship</p>
            <p className={classes.bullet}>• President's Scholar/Distinction</p>
            <h4 className={classes.subtitle}>Courses Taken:</h4>
            {Courses.map(item => {
              return (
                <div>
                  <h4>{item.year}</h4>
                  {listCourses(item.arr, classes)}
                </div>
              );
            })}
          </div>
        </Box>
      </Fade>
    </div>
  );
};

export default Education;
