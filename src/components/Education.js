import React from 'react';
import { makeStyles } from '@material-ui/core';
import uwlogo from '../res/uw.png';
import { Courses } from './Constants';
import { Box } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    educationpage: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: '6vh',
        paddingBottom: '3vh',
        textAlign: 'left',
    },
    box: {
        marginTop: '20px',
    },
    logo: {
        width: '70px',
        height: '70px',
        minWidth: '70px',
        minHeight: '70px',
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
        fontSize: '15px'
    },
    averages:{
        marginTop: '-10px',
        marginBottom: '15px',
        fontSize: '15px'
    },
    bullet: {
        margin: '0px',
        marginTop: '10px',
        fontSize: '17px',
        marginLeft: '15px',
    },
    course: {
        minWidth: '110px',
        margin: '0px',
        fontSize: '1.1em',
        marginTop: '10px',
        color: '#DA70D6',
        '&:hover': {
            color: '#4B0082'
        }
    },
    courseName: {
        fontSize: '1.1em',
        margin: '0px',
        marginTop: '10px'
    }
});

const listCourses = (arr, classes) => {
    return arr.map(item => {
        return (
            <Box display="flex" flexDirection="row">
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                    <div className={classes.course}>
                        {item.code}
                    </div>
                </a>
                <div className={classes.courseName}>
                    {((item.bold) ? <b>{item.name}</b> : <div>{item.name}</div>)}
                </div>
            </Box>
        );
    });
};

const Education = () => {
    const classes = useStyles();
    const phone = useMediaQuery('(max-width:425px)');

    return (
        <div className={`education ${classes.educationpage}`}>
            <Fade>
                <h2>Education</h2>
                <hr />
                <Box display="flex" flexDirection="row" className={classes.box}>
                    {(!phone) ? <img className={classes.logo} src={uwlogo} /> : <div />}
                    <div>
                        <h3 className={classes.title}>
                            University of Waterloo
                        </h3>
                        <h5 className={classes.description}>
                            Bachelor of Computer Science | 2018 - 2023
                        </h5>
                        <h5 className={classes.averages}>
                            CGPA:&nbsp;&nbsp;3.85
                        </h5>
                        <h5 className={classes.averages}>
                            CAV:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;87.60
                        </h5>
                        <h4 className={classes.subtitle}>
                            Scholarships:
                        </h4>
                        <p className={classes.bullet}>
                            • B.P. Dammizio Scholarship
                        </p>
                        <p className={classes.bullet}>
                            • President's Scholar/Distinction
                        </p>
                        <h4 className={classes.subtitle}>
                            Courses Taken:
                        </h4>
                        {
                            Courses.map(item => {
                                return (
                                    <div>
                                        <h4>
                                            {item.year}
                                        </h4>
                                        {listCourses(item.arr, classes)}
                                    </div>
                                );
                            })
                        }
                    </div>
                </Box>
            </Fade>
        </div>
    );
};

export default Education;