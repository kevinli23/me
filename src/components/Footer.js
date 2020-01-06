import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import '../css/logo.css';
import logo from '../res/logo.svg';

const useStyles = makeStyles({
    footer: {
        height: '5vh',
        marginTop: '2vh',
        borderTop: '1px solid black',
    },
    icon: {
        color: 'black',
        '&:hover': {
            color: 'purple',
        },
    },
});

const Footer = () => {
    const classes = useStyles();

    return(
        <Box display="flex" justifyContent='flex-end' alignItems="center" textAlign="left" className={classes.footer}>
            <Box flexGrow={1} display="flex" alignItems="center">
                Made with <img src={logo} className="App-logo" alt="logo" />
            </Box>
            © Kevin Li 2020
        </Box>
    );
}

export default Footer;