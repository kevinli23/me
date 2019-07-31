import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import me from '../res/me.jfif';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    image: {
        width: '23vw',
        height: '23vw',
        borderRadius: '50%',
        // border: '2px solid black',
        boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.12)',
        '&:hover': {
            boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.35)',
        },
        marginTop: '9vh',
    },
    intro: {
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontSize: '20px',
    },
    subtitle: {
        marginTop: '-20px',
    },
    name: {
        fontWeight: 'bold',
        color: '#3090C7',
        fontSize: '2em',
        marginBottom: '20px'
    },
    icontray: {
        height: '5vh',
        marginTop: '2vh',
    },
    icon: {
        color: 'black',
        '&:hover': {
            color: 'purple',
        },
    }
});

const Intro = () => {
    const classes = useStyles();

    return (
        <Fade>
            <div className={classes.intro}>
                <img className={classes.image} src={me} alt="Avatar" />
                <div>
                    <h1><span className={classes.name}>Kevin Li</span></h1>
                    <h2 className={classes.subtitle}>Computer Science Student @ UWaterloo</h2>
                    <Box display="flex" justifyContent='center' alignItems="center" className={classes.icontray}>
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
                </div>
            </div>
        </Fade>
    );
};

export default Intro;