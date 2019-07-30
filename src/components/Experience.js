import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
    experiencepage: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: '6vh',
        paddingBottom: '3vh',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: '1.5em',
    },
    image: {
        width: '70px',
        height: '70px',
    }
});

const Experience = () => {
    const classes = useStyles();

    return (
        <div className={`experience ${classes.experiencepage}`}>
            <Fade>
                <h2>Experience</h2>
                <hr />
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
                <h2>Experience</h2>
            </Fade>
        </div>
    );
}

export default Experience;