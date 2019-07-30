import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { faJava, faPython, faJs, faHtml5, faCss3, faReact, faBootstrap, faLinux, faGit, faGithub, faNode } from "@fortawesome/free-brands-svg-icons";
import { faTensorflow, faCpp, faCsharp, faMongo} from './Icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { aboutMeText, iconColors } from './Constants';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
    aboutpage: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: '6vh',
        paddingBottom: '3vh',
        textAlign: 'left',
        fontSize: '1.5em',
    },
    languages: {
        flex: 1,
    },
    icon: {
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        border: 'solid 0.08em #FFF',
        '&:hover': {
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        },
    }
});

const icons = [faJava, faPython, faGithub, faJs, faReact, faHtml5, faCss3, faBootstrap, faLinux, faGit, faTensorflow, faCsharp, faMongo, faCpp, faNode];

const About = () => {
    const classes = useStyles();

    return (
        <div className={`about ${classes.aboutpage}`}>
            <Fade>
                <h2>About</h2>
                <hr />
                <p>
                    {aboutMeText[0]}
                </p>
                <p>
                    {aboutMeText[1]}
                </p>
                <p>
                    {aboutMeText[2]}
                </p>
                <h3>{aboutMeText[3]}</h3>
                <Box display="flex" justifyContent="initial" flexWrap="wrap" className={classes.languages}>
                    {icons.map(name => {
                        return (<FontAwesomeIcon className={classes.icon} title={name.iconName} color={iconColors[name.iconName]} icon={name} size='2x' border fixedWidth />);
                    })}
                </Box>
            </Fade>

        </div>
    );
}

export default About;