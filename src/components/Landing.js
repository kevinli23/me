import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import '../css/Landing.css'
import ParticleComponent from './ParticleComponent';
import { Link } from "react-scroll";

const useStyles = makeStyles({
    landing: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'transparent',
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        flexDirection: 'column',
        zIndex: '2',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    icontray: ({isPhone}) => ({
        height: '5vh',
        marginTop: '30px',
        justifyContent: (isPhone) ? 'space-between' : 'center',
    }),
    icon: {
        color: 'white',
        '&:hover': {
            color: 'purple',
        },
    },
    text: {
        marginBottom: '20px',
    },
    main:{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    arrow: {
        flexDirection: 'column',
        paddingBottom: '50px'
    }
});

const Landing = () => {
    const classes = useStyles();
    return(
        <div style={{marginBottom: '100vh'}}>
            <ParticleComponent />
            <div className={classes.landing}>
                <div className={classes.main}>
                <div className={classes.text}>
                    <Fade>
                        I'm Kevin Li
                    </Fade>
                </div>
                <div className={classes.text}>
                    <Fade delay={1000}>
                        Computer Science Student @ UWaterloo
                    </Fade>
                </div>
                    <Box display="flex" alignItems="center" className={classes.icontray}>
                        <Fade delay={2000}>
                            <a href="https://github.com/kevinli23" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size='3x' fixedWidth className={classes.icon} />
                            </a>
                        </Fade>
                        <Fade delay={2300}>
                            <a href="https://www.linkedin.com/in/kevinli230/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size='3x' fixedWidth className={classes.icon} />
                            </a>
                        </Fade>
                        <Fade delay={2600}>
                            <a href="https://drive.google.com/file/d/1Qnp6rfoAevVXcv0jHrQl4kM4s1VjwKLd/view?usp=sharing/" target="_blank">
                                <FontAwesomeIcon icon={faFile} size='3x' fixedWidth className={classes.icon} />
                            </a>
                        </Fade>
                    </Box>
            </div>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-10}
                duration={1000}
            >
                <div className={`container ${classes.arrow}`}>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                </div>
            </Link>
            {/* <div class="arrow bounce"></div> */}
        </div>
        </div>
    );
};

export default Landing;