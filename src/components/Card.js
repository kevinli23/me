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
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
    maxHeight: '100%',
    flexDirection: 'column',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center'
  },
  media: {
    height: '300px',
    width: '300px'
  },
  desc: {
    marginBottom: '20px',
    marginLeft: '10px',
    marginRight: '10px'
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
    marginBottom: '10px',
    width: '80%',
    float: 'center'
  },
  title: {
    marginTop: '10px',
    marginBottom: '5px',
    textAlign: 'center'
  },
  icontray: {
    marginTop: '5px',
    marginBottom: '15px',
  }
});

const MyCard = ({image, title, desc, link, icons}) => {
  const classes = useStyles();
  return(
    <div className={classes.card}>
          <img src={image} />
          <Typography gutterBottom variant="h5" component="h2">
            <h4 className={classes.title}>{title}</h4>
          </Typography>
          <Box className={classes.icontray} justifyContent={"space-between"} display="flex">
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