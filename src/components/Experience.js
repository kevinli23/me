import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import intelex from '../res/intelex.png'

const useStyles = makeStyles({
    experiencepage: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: '2vh',
        textAlign: 'left',
        justifyContent: 'center',
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

        </div>
    );
}

export default Experience;