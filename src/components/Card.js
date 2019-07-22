import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '20px',
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href="http://pluspng.com/img-png/kermit-png-kermit-png-472.png" target="_blank">
        <CardMedia
          className={classes.media}
          image="https://ih0.redbubble.net/image.373301418.1062/mp,650x642,gloss,f8f8f8,t-pad,750x1000,f8f8f8.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}