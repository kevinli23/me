import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from '@material-ui/core/Typography';
import { iconColors } from './Constants';
import style from '../assets/jss/card.js';

const useStyles = makeStyles(style);

const MyCard = ({ image, title, desc, link, icons, subdesc }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img style={{ maxWidth: '300px', maxHeight: '300px' }} src={image} />
      <Typography gutterBottom variant="h5" component="h2">
        <h4 className={classes.title}>{title}</h4>
      </Typography>
      {
        (subdesc === "") ? <div></div> : <p className={classes.subdesc} >{subdesc}</p>
      }

      <Box className={classes.icontray} justifyContent={"space-between"} display="flex">
        {
          icons.map(name => {
            return (<FontAwesomeIcon color={iconColors[name.iconName]} icon={name} size='2x' fixedWidth />);
          })
        }
      </Box>
      <Typography className={classes.desc} variant="body2" component="p">
        {desc}
      </Typography>
      <a href={link} rel="noopener noreferrer" target="_blank" className={classes.learnMore}>
        Learn More
          </a>
    </div>
  );
}

export default MyCard;