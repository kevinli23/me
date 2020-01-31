import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import {
  faJava,
  faPython,
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faBootstrap,
  faLinux,
  faGit,
  faGithub,
  faNode
} from "@fortawesome/free-brands-svg-icons";
import { faTensorflow, faCpp, faCsharp, faMongo } from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { aboutMeText, iconColors } from "./Constants";
import Fade from "react-reveal/Fade";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import style from "../assets/jss/about.js";
const useStyles = makeStyles(style);

const icons = [
  faJava,
  faPython,
  faGithub,
  faJs,
  faReact,
  faHtml5,
  faCss3,
  faBootstrap,
  faLinux,
  faGit,
  faTensorflow,
  faCsharp,
  faMongo,
  faCpp,
  faNode
];

const About = () => {
  const isPhone = useMediaQuery("(max-width:425px)");
  return isPhone ? <MobileAbout /> : <DesktopAbout />;
};

const DesktopAbout = () => {
  const classes = useStyles();

  return (
    <div className={`about ${classes.aboutpage}`}>
      <Fade>
        <h2>About</h2>
        <hr />
        <Typography variant="h5" paragraph>
          {aboutMeText[0]}
        </Typography>
        <Typography variant="h5" paragraph>
          {aboutMeText[1]}
        </Typography>
        <Typography variant="h5" paragraph>
          {aboutMeText[2]}
        </Typography>
        <h3>{aboutMeText[3]}</h3>
        <Box
          display="flex"
          justifyContent="initial"
          flexWrap="wrap"
          className={classes.languages}
        >
          {icons.map(name => {
            return (
              <FontAwesomeIcon
                className={classes.icon}
                title={name.iconName}
                color={iconColors[name.iconName]}
                icon={name}
                size="2x"
                border
                fixedWidth
              />
            );
          })}
        </Box>
      </Fade>
    </div>
  );
};

const MobileAbout = () => {
  const classes = useStyles();

  return (
    <div className={`about ${classes.aboutpagemobile}`}>
      <Fade>
        <h2>About</h2>
        <hr />
        <p>{aboutMeText[0]}</p>
        <p>{aboutMeText[1]}</p>
        <p>{aboutMeText[2]}</p>
        <h3>{aboutMeText[3]}</h3>
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          className={classes.languagesMobile}
        >
          {icons.map(name => {
            return (
              <FontAwesomeIcon
                className={classes.icon}
                title={name.iconName}
                color={iconColors[name.iconName]}
                icon={name}
                size="2x"
                border
                fixedWidth
              />
            );
          })}
        </Box>
      </Fade>
    </div>
  );
};

export default About;
