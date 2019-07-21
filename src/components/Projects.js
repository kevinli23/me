import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    projectspage: {
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

const Projects = () => {
    const classes = useStyles();

    return (
        <div className={`projects ${classes.projectspage}`}>
            <h2>Experience</h2>
            <hr />

        </div>
    );
}

export default Projects;