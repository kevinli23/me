import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
    footer: {
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

const Footer = () => {
    const classes = useStyles();

    return(
        <Box display="flex" justifyContent='flex-end' alignItems="center" textAlign="left" className={classes.footer}>
            <Box flexGrow={1}>
                
            </Box>
            <a href="https://github.com/kevinli23">
                <FontAwesomeIcon icon={faGithub} size='2x' fixedWidth className={classes.icon} />
            </a>
            <a href="https://www.linkedin.com/in/kevinli230/">
                <FontAwesomeIcon icon={faLinkedin} size='2x' fixedWidth className={classes.icon} />
            </a>
            <a href="https://www.linkedin.com/in/kevinli230/">
                <FontAwesomeIcon icon={faFile} size='2x' fixedWidth className={classes.icon} />
            </a>
        </Box>
    );
}

export default Footer;