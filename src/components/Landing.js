import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import '../css/Landing.css'
import Particles from 'react-particles-js'

const useStyles = makeStyles({
    landing: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'transparent',
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    }
});

const Landing = () => {
    const classes = useStyles();
    return(
        <div style={{marginBottom: '100vh'}}>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 65
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onresize": {
                                "enable": true,
                                "density_auto": true,
                                // "density_area": 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                            }
                        }
                    }
                }}
                style={{
                        width: '100vw',
                        height: '100vh',
                        background: `#000000`,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                 }}
            />
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
            {/* <div class="arrow bounce"></div> */}
        </div>
        </div>
    );
};

export default Landing;