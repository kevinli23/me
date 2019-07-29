import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Card from './Card';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
            <h2>Projects</h2>
            <hr />
            <Box justifyContent={(small) ? 'center' : 'space-between'} display="flex" flexWrap="wrap" className={classes.projectcards}>
                <Card 
                    image={"https://ih0.redbubble.net/image.373301418.1062/mp,650x642,gloss,f8f8f8,t-pad,750x1000,f8f8f8.jpg"}
                    title={"Contemplative Reptile"}
                    desc={`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica`}
                    link={"http://pluspng.com/img-png/kermit-png-kermit-png-472.png"}/>
                <Card 
                    image={"https://ih0.redbubble.net/image.373301418.1062/mp,650x642,gloss,f8f8f8,t-pad,750x1000,f8f8f8.jpg"}
                    title={"Contemplative Reptile"}
                    desc={`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica`}
                    link={"http://pluspng.com/img-png/kermit-png-kermit-png-472.png"}/>
                <Card 
                    image={"https://ih0.redbubble.net/image.373301418.1062/mp,650x642,gloss,f8f8f8,t-pad,750x1000,f8f8f8.jpg"}
                    title={"Contemplative Reptile"}
                    desc={`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica`}
                    link={"http://pluspng.com/img-png/kermit-png-kermit-png-472.png"}/>
                <Card 
                    image={"https://ih0.redbubble.net/image.373301418.1062/mp,650x642,gloss,f8f8f8,t-pad,750x1000,f8f8f8.jpg"}
                    title={"Contemplative Reptile"}
                    desc={`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica`}
                    link={"http://pluspng.com/img-png/kermit-png-kermit-png-472.png"}/>
                <Card 
                    image={"https://ih0.redbubble.net/image.373301418.1062/mp,650x642,gloss,f8f8f8,t-pad,750x1000,f8f8f8.jpg"}
                    title={"Contemplative Reptile"}
                    desc={`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica`}
                    link={"http://pluspng.com/img-png/kermit-png-kermit-png-472.png"}/>
                <Card 
                    image={"https://ih0.redbubble.net/image.373301418.1062/mp,650x642,gloss,f8f8f8,t-pad,750x1000,f8f8f8.jpg"}
                    title={"Contemplative Reptile"}
                    desc={`Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica`}
                    link={"http://pluspng.com/img-png/kermit-png-kermit-png-472.png"}/>
            </Box>
        </div>
    );
}

export default Projects;