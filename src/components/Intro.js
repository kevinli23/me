import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import me from '../res/me.jfif';
import Fade from 'react-reveal/Fade';

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
        color: '#add8e6',
        fontSize: '2em',
        marginBottom: '20px'
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
                </div>
            </div>
        </Fade>
    );
};

export default Intro;