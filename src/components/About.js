import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { faJava, faPython, faJs, faHtml5, faCss3, faReact, faBootstrap, faLinux, faGit, faGithub, faNode } from "@fortawesome/free-brands-svg-icons";
import { faTensorflow, faCpp, faCsharp, faMongo} from './Icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
                Whomever is reading this, Hello! I'm currently a second year Computer Science Student at the University of Waterloo. I have been programming for about
                three years and am actively learning new things daily! I am currently employed at Intelex Technologies Inc. where I work as a software developer. At the moment, I am
                interested in Machine Learning (especially the mathematics that goes behind it!) as well as various other JavaScript libraries such as React and Node.
            </p>
            <p>
                Aside from programming and learning, on my spare time I enjoy playing basketball (and keeping up with the NBA), watching cooking videos, following politics and
                playing a bit of video games.
            </p>
            <p>
                I am currently seeking an internship opportunity for the summer (May to August) of 2020 that involves Software Development or Machine Learning!
            </p>
            <h3>Languages | Tools | Frameworks that I am familar with:</h3>
            <Box display="flex" justifyContent={(max1383) ? "initial" : "space-between"} flexWrap="wrap" className={classes.languages}>
                {icons.map(name => {
                    return (<FontAwesomeIcon icon={name} size='2x' border fixedWidth />);
                })
                }
            </Box>
        </div>
    );
}

export default About;