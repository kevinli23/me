import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Card from "./Card";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { projectInformation } from "./Constants";
import Fade from "react-reveal/Fade";
import style from "../assets/jss/project.js";

const useStyles = makeStyles(style);


const ProjectCard = props => {
  return (
    <Box
      justifyContent={props.small ? "center" : "space-between"}
      display="flex"
      flexWrap="wrap"
      className={props.classes.projectcards}
    >
      <Card
        image={projectInformation[props.index].image}
        title={projectInformation[props.index].name}
        desc={projectInformation[props.index].description}
        link={projectInformation[props.index].link}
        icons={projectInformation[props.index].icons}
        subdesc={projectInformation[props.index].subdesc}
      />
    </Box>
  );
};

const Projects = () => {
  const classes = useStyles();
  const small = useMediaQuery("(max-width:1160px)");

  return (
    <div className={classes.root}>
      <div className={`projects ${classes.projectspage}`}>
        <Fade>
          <h2>Projects</h2>
          <hr />
            <div style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
            <ProjectCard small={small} classes={classes} index={0} />
            <ProjectCard small={small} classes={classes} index={1} />
            <ProjectCard small={small} classes={classes} index={2} />
            <ProjectCard small={small} classes={classes} index={3} />
            <ProjectCard small={small} classes={classes} index={4} />
            <ProjectCard small={small} classes={classes} index={5} />
            </div>

        </Fade>
      </div>
    </div>
  );
};

export default Projects;
