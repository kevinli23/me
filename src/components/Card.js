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
    boxShadow: 'none',
    '&:hover:': {
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2)'
    },
    maxHeight: '100%',
    flexDirection: 'column',
    display: 'flex',
  },
  media: {
    height: '300px',
    width: '300px'
  },
  desc: {
    marginBottom: '20px',
  },
  learnMore: {
    color: 'black',
    padding: '10px',
    borderRadius: '25px',
    border: '1px solid black',
    height: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#d8d8d8'
    },
    marginTop: 'auto',
  },
});

const MyCard = ({image, title, desc, link, icons}) => {
  const classes = useStyles();
  return(
    <div className={classes.card}>
          <img src={image} />
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
          <Typography className={classes.desc} variant="body2" component="p">
            {desc}
          </Typography>
          <div className={classes.learnMore}>
            <a href={link} target="_blank">
              Learn More
            </a>
          </div>
    </div>
  );
}

export default MyCard;