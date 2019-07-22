import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import me from '../res/kermit.png'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    image: {
        width: '25vw',
        height: '25vw',
        borderRadius: '50%',
        border: '2px solid black',
    },
    intro: {
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontSize: '20px',
    },
    subtitle: {
        marginTop: '-20px',
    }
});

const Intro = () => {
    const classes = useStyles();

    return (
        <div className={classes.intro}>
            <img className={classes.image} src={me} alt="Avatar" />
            <div>
                <h1>Hi! My name's <b>Kevin Li</b></h1>
                <h2 className={classes.subtitle}>Computer Science Student @ UWaterloo</h2>
            </div>
        </div>
    );
};

export default Intro;