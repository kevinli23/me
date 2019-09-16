import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Card from './Card';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { projectInformation } from './Constants';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
    projectspage: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: '6vh',
        paddingBottom: '3vh',
        textAlign: 'left',
        justifyContent: 'center',
        height: 'inherit',
        fontSize: '1.5em',
    },
    image: {
        width: '70px',
        height: '70px',
    },
    projectcards: {
        marginTop: '3vh'
    }
});

const Projects = () => {
    const classes = useStyles();
    const small = useMediaQuery('(max-width:1160px)');

    return (
        <div className={`projects ${classes.projectspage}`}>
            <Fade>
                <h2>Projects</h2>
                <hr />
                <Box justifyContent={(small) ? 'center' : 'space-between'} display="flex" flexWrap="wrap" className={classes.projectcards}>
                    {
                        projectInformation.map(proj => {
                            return(
                                <Card image={proj.image} title={proj.name} desc={proj.description} link={proj.link} icons={proj.icons} subdesc={proj.subdesc} />
                            );
                        })
                    }
                </Box>
            </Fade>
        </div>
    );
}

export default Projects;