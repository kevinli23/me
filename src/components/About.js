import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { faJava, faPython, faJs, faHtml5, faCss3, faReact, faBootstrap, faLinux, faGit, faGithub, faNode } from "@fortawesome/free-brands-svg-icons";
import { faTensorflow, faCpp, faCsharp, faMongo} from './Icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { aboutMeText } from './Constants'; 

const useStyles = makeStyles({
    aboutpage: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: '2vh',
        textAlign: 'left',
    },
    languages: {
        flex: 1,
    },
    iconImage: {
        width: '5.15em',
        height: '5em',
        border: '0.3em solid #eee',
        borderRadius: '0.1em 5%',
        paddingTop: '0.04em',
        paddingBottom: '0.11em'
    }
});

const icons = [faJava, faPython, faJs, faReact, faHtml5, faCss3, faBootstrap, faLinux, faGit, faGithub, faTensorflow, faCpp, faCsharp, faMongo, faNode];

const About = () => {
    const classes = useStyles();
    const max1383 = useMediaQuery('(max-width:1383px)');

    return (
        <div className={`about ${classes.aboutpage}`}>
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
            <Box display="flex" justifyContent={(max1383) ? "initial" : "space-between"} flexWrap="wrap" className={classes.languages}>
                {icons.map(name => {
                    return (<FontAwesomeIcon icon={name} size='2x' border fixedWidth />);
                })}
            </Box>
        </div>
    );
}

export default About;