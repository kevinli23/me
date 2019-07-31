import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import intelex from '../res/intelex.png';
import tdsb from '../res/tdsb.png';

const useStyles = makeStyles({
    workpage: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: '6vh',
        paddingBottom: '3vh',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: '1.5em',
    },
    box:{
        marginTop: '20px',
    },
    logo: {
        width: '70px',
        height: '70px',
        marginRight: '25px',
    },
    title: {
        margin: '0px',
        fontSize: '30px'
    },
    subtitle: {
        margin: '0px',
        marginTop: '20px',
        fontSize: '22px'
    },
    description: {
        marginTop: '1px',
        marginBottom: '15px',
        fontSize: '18px'
    },
});

const Work = () => {
    const classes = useStyles();

    return (
        <div className={`experience ${classes.workpage}`}>
            <Fade>
                <h2>Work</h2>
                <hr />
                <Box display="flex" flexDirection="row" className={classes.box}>
                    <img className={classes.logo} src={intelex} />
                    <div>
                        <h3 className={classes.title}>
                            Intelex Technologies Inc.
                        </h3>
                        <h5 className={classes.description}>
                            Co-op Software Developer | April 2019 - August 2019
                        </h5>
                    </div>
                </Box>
                <Box display="flex" flexDirection="row" className={classes.box}>
                    <img className={classes.logo} src={tdsb} />
                    <div>
                        <h3 className={classes.title}>
                            Toronto District School Board
                        </h3>
                        <h5 className={classes.description}>
                            Robotics Mentor | July 2018
                        </h5>
                    </div>
                </Box>
            </Fade>
        </div>
    );
}

export default Work;