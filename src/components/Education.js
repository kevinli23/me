import React from 'react';
import { makeStyles } from '@material-ui/core';
import uwlogo from '../res/uw.png';
import { Courses } from './Constants';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    educationpage: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: '2vh',
        textAlign: 'left',
    },
    box:{
        marginTop: '20px',
    },
    logo: {
        width: '70px',
        height: '70px',
        marginRight: '15px',
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
    bullet: {
        margin: '0px',
        marginTop: '10px',
        fontSize: '15px',
        marginLeft: '15px',
    },
    course: {
        width: '100px',
        margin: '0px',
        fontSize: '0.9em',
        marginTop: '10px',
    },
    courseName: {
        fontSize: '0.9em',
        margin: '0px',
        marginTop: '10px'
    }
});

const listCourses = (arr, classes) => {
    return arr.map(item => {
        return(
            <Box display="flex" flexDirection="row">
                <div className={classes.course}>
                    {item.code}
                </div>
                <div className={classes.courseName}>
                    {item.name}
                </div>
            </Box>
        );
    });
};

const Education = () => {
    const classes = useStyles();

    return(
        <div className={`education ${classes.educationpage}`}>
            <h2>Education</h2>
            <hr />
            <Box display="flex" flexDirection="row" className={classes.box}>
                <img className={classes.logo} src={uwlogo} />
                <div>
                    <h3 className={classes.title}>
                        University of Waterloo
                    </h3>
                    <h5 className={classes.description}>
                        Bachelor of Computer Science | 2018 - 2023
                    </h5>
                    <h4 className={classes.subtitle}>
                        Scholarships:
                    </h4>
                    <h6 className={classes.bullet}>
                        • B.P. Dammizio Scholarship
                    </h6>
                    <h6 className={classes.bullet}>
                        • President's Scholar/Distinction
                    </h6>
                    <h4 className={classes.subtitle}>
                        Relevant Courses: 
                    </h4>
                    {
                        Courses.map(item => {
                            return(
                                <div>
                                    <h5>
                                        {item.year}
                                    </h5>
                                    {listCourses(item.arr, classes)}
                                </div>
                            );
                        })
                    }
                </div>
            </Box>
        </div>
    );
};

export default Education;