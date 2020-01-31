import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Card from "./Card";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { projectInformation } from "./Constants";
import Fade from "react-reveal/Fade";
import style from "../assets/jss/project.js";

import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles(style);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

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
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={`projects ${classes.projectspage}`}>
        <Fade>
          <h2>Projects</h2>
          <hr />
          <AppBar elevation={0} position="static" color="inherit">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Pengu's Dank Adventure" {...a11yProps(0)} />
              <Tab label="Dark Run" {...a11yProps(1)} />
              <Tab label="Chronovise" {...a11yProps(2)} />
              <Tab label="Portfolio Website" {...a11yProps(3)} />
              <Tab label="Hand Sign Ninjutsu Simulator" {...a11yProps(4)} />
            </Tabs>
          </AppBar>
          <TabPanel class={classes.tabpanel} value={value} index={0}>
            <ProjectCard small={small} classes={classes} index={0} />
          </TabPanel>
          <TabPanel class={classes.tabpanel} value={value} index={1}>
            <ProjectCard small={small} classes={classes} index={1} />
          </TabPanel>
          <TabPanel class={classes.tabpanel} value={value} index={2}>
            <ProjectCard small={small} classes={classes} index={2} />
          </TabPanel>
          <TabPanel class={classes.tabpanel} value={value} index={3}>
            <ProjectCard small={small} classes={classes} index={3} />
          </TabPanel>
          <TabPanel class={classes.tabpanel} value={value} index={4}>
            <ProjectCard small={small} classes={classes} index={4} />
          </TabPanel>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
