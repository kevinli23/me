import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    appbar: {
        color: 'white',
        backgroundColor: 'black',
        height: '4vh',
        marginBottom: '5vh',
        fontFamily: "Roboto Mono, monospace",
    },
    items:{
        padding: '7px',
    },
});

const Navbar = () =>{
    const classes = useStyles();

    return(
        <Box display="flex" justifyContent="center" m={0} p={0} className={classes.appbar}>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className={classes.items}
              >
                About
              </Link>

              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className={classes.items}
              >
                Experience
              </Link>

              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className={classes.items}
              >
                Projects
              </Link>

              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className={classes.items}
              >
                Education
              </Link>
        </Box>
    );
}

export default Navbar;