import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank
} from "@fortawesome/free-brands-svg-icons";
import { faDevpost, faResume } from "./Icons";
import "../css/Landing.css";
import ParticleComponent from "./ParticleComponent";
import { Link } from "react-scroll";
import {menuIcons} from './Constants';

const useStyles = makeStyles({
  landing: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "transparent",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    flexDirection: "column",
    zIndex: "2",
    position: "absolute",
    top: 0,
    left: 0,
    overflowX: "hidden"
  },
  icontray: ({ isPhone }) => ({
    height: "5vh",
    marginTop: "30px",
    justifyContent: isPhone ? "space-between" : "center"
  }),
  icon: {
    color: "white",
    "&:hover": {
      color: "purple"
    }
  },
  text: {
    marginBottom: "20px"
  },
  main: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  arrow: {
    flexDirection: "column",
    paddingBottom: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Landing = () => {
  const classes = useStyles();
  return (
    <div style={{ marginBottom: "100vh" }}>
      <ParticleComponent />
      <div className={classes.landing}>
        <div className={classes.main}>
          <div className={classes.text}>
            <Fade>I'm Kevin Li</Fade>
          </div>
          <div className={classes.text}>
            <Fade delay={1000}>Computer Science Student @ UWaterloo</Fade>
          </div>
          <Box display="flex" alignItems="center" className={classes.icontray}>
            {menuIcons.map((icon) => 
                <Fade delay={icon.delay}>
                    <a href={icon.link} rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={icon.icon} size="3x" fixedWidth className={classes.icon} />
                    </a>
                </Fade>
            )}
          </Box>
        </div>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-10}
          duration={1000}
          style={{ cursor: "pointer" }}
        >
          <div className={`container ${classes.arrow}`}>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="texts">Scroll down</span>
          </div>
        </Link>
        {/* <div class="arrow bounce"></div> */}
      </div>
    </div>
  );
};

export default Landing;
