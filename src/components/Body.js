import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import About from './About';
import Intro from './Intro';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperz: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  }
}));

export default function Body() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={2} />
        <Grid item xs={8} wrap="nowrap">
          <Intro />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Footer />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}