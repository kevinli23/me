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
        border: '2px solid black',
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
                        <a href="https://github.com/kevinli23">
                            <FontAwesomeIcon icon={faGithub} size='3x' fixedWidth className={classes.icon} />
                        </a>
                        <a href="https://www.linkedin.com/in/kevinli230/">
                            <FontAwesomeIcon icon={faLinkedin} size='3x' fixedWidth className={classes.icon} />
                        </a>
                        <a href="https://www.linkedin.com/in/kevinli230/">
                            <FontAwesomeIcon icon={faFile} size='3x' fixedWidth className={classes.icon} />
                        </a>
                    </Box>
                </div>
            </div>
        </Fade>
    );
};

export default Intro;