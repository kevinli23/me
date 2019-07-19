import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import me from '../res/kermit.png'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    image:{
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        border: '2px solid black',
        marginBottom: '2vh',
    }, 
    intro:{
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontSize: '20px',
    },
    subtitle: {
        marginTop: '-20px',
    }
});

const Intro = () => {
    const classes = useStyles();

    return(
        <div className={classes.intro}>
            <img className={classes.image} src={me} alt="Avatar" />
            <div>
                <h2>Hi! My name's <b>Kevin Li</b></h2>
                <h3 className={classes.subtitle}>Computer Science Student @ UWaterloo</h3>
            </div>
        </div>
    );
};

export default Intro;