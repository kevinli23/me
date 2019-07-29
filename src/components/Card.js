import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: '20px',
  },
  media: {
    height: '300px',
    width: '300px'
  },
  learnMore: {
    color: 'black',
    padding: '10px',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#d8d8d8'
    },
    marginTop: '30px'
  }
});

const MyCard = ({image, title, desc, link, icons}) => {
  const classes = useStyles();
  return(
    <Card className={classes.card}>

        <CardMedia className={classes.media} image={image} title={title} />

        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Box justifyContent={"space-between"} display="flex" m={1}>
              {
                icons.map(name => {
                  return (<FontAwesomeIcon icon={name} size='2x' fixedWidth />);
                })
              }
            </Box>
            <Typography variant="body2" component="p">
              {desc}
            </Typography>
            <a href={link}>
              <Box className={classes.learnMore} border={'1px solid black'} alignItems="center" m={1}>
                  Learn More
              </Box>
            </a>
        </CardContent>

    </Card>
  );
}

export default MyCard;