import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Landing from "./Landing";
import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import style from "../assets/jss/body.js";
import IconSidebar from "../components/IconSidebar";

const useStyles = makeStyles(style);

export default function Body() {
  const classes = useStyles();
  const small = useMediaQuery("(max-width:600px)");

  var sides = small ? 1 : 4;
  var content = small ? 10 : 8;

  return (
    <div className={classes.root}>
      <Landing />
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={sides} >
          <IconSidebar />
        </Grid>
        <Grid item xs={content} wrap="nowrap">
          <About />
          <Work />
          <Projects />
          <Education />
          <Footer />
        </Grid>
        <Grid item xs={sides} />
      </Grid>
    </div>
  );
}
