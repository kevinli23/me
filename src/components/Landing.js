import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import '../css/Landing.css'

const useStyles = makeStyles({
    landing: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
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
                <Fade delay={2000}>
                    <Box display="flex" alignItems="center" className={classes.icontray}>
                                <a href="https://github.com/kevinli23" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size='3x' fixedWidth className={classes.icon} />
                                </a>
                                <a href="https://www.linkedin.com/in/kevinli230/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} size='3x' fixedWidth className={classes.icon} />
                                </a>
                                <a href="https://drive.google.com/file/d/1Qnp6rfoAevVXcv0jHrQl4kM4s1VjwKLd/view?usp=sharing/" target="_blank">
                                    <FontAwesomeIcon icon={faFile} size='3x' fixedWidth className={classes.icon} />
                                </a>
                    </Box>
                </Fade>
            </div>
            {/* <div class="arrow bounce"></div> */}
        </div>
    );
};

export default Landing;