import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link } from "react-scroll";
import "../css/scss/Navbar.scss";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appbar: {
    color: "white",
    backgroundColor: "#0a192f",
    height: "4.5vh",
    fontFamily: "Roboto Mono, monospace",
    minWidth: "100vw",
    zIndex: "4",
    boxShadow: "0 10px 30px -10px #303C55"
  },
  items: {
    padding: "8px"
  }
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      m={0}
      p={0}
      className={classes.appbar}
    >
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-10}
        duration={1000}
        className={`${classes.items} menu-button`}
      >
        About
      </Link>

      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={-10}
        duration={1000}
        className={`${classes.items} menu-button`}
      >
        Experience
      </Link>

      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-10}
        duration={1000}
        className={`${classes.items} menu-button`}
      >
        Projects
      </Link>

      <Link
        activeClass="active"
        to="education"
        spy={true}
        smooth={true}
        offset={-10}
        duration={1000}
        className={`${classes.items} menu-button`}
      >
        Education
      </Link>
    </Box>
  );
};

export default Navbar;
