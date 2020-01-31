import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import intelex from "../res/intelex.png";
import tdsb from "../res/tdsb.png";
import waterloo from "../res/uw.png";
import Fade from "react-reveal/Fade";
import Icon from "@material-ui/core/Icon";
import style from "../assets/jss/work.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles(style);

export default function Work() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`experience ${classes.workpage}`}>
      <Fade>
        <h2>Experience</h2>
        <hr />
        <div className={classes.root}>
          <AppBar elevation={0} position="static" color="inherit">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab
                label="Teaching Assistant"
                icon={
                  <Icon classes={{ root: classes.iconRoot }}>
                    <img className={classes.imageIcon} src={waterloo} />
                  </Icon>
                }
                {...a11yProps(0)}
              />
              <Tab
                label="Software Developer"
                icon={
                  <Icon classes={{ root: classes.iconRoot }}>
                    <img className={classes.imageIcon} src={intelex} />
                  </Icon>
                }
                {...a11yProps(1)}
              />
              <Tab
                label="Robotics Mentor"
                icon={
                  <Icon classes={{ root: classes.iconRoot }}>
                    <img className={classes.imageIcon} src={tdsb} />
                  </Icon>
                }
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} style={{ minHeight: "255px" }}>
            <Box display="flex" flexDirection="row" className={classes.box}>
              <img className={classes.logo} src={waterloo} />
              <div>
                <h3 className={classes.title}>University of Waterloo</h3>
                <h5 className={classes.description}>
                  Teaching Assistant | September 2019 - December 2019
                </h5>
              </div>
            </Box>
            <div className={classes.workDetails}>
              <Typography>
                ○ Was a TA for the course, Algebra for Honours Mathematics (MATH
                135)
              </Typography>
              <Typography>
                ○ Graded and provided feedback to weekly math assignments
              </Typography>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} style={{ minHeight: "255px" }}>
            <Box display="flex" flexDirection="row" className={classes.box}>
              <img className={classes.logo} src={intelex} />
              <div>
                <h3 className={classes.title}>Intelex Technologies Inc.</h3>
                <h5 className={classes.description}>
                  Software Developer | April 2019 - August 2019
                </h5>
              </div>
            </Box>
            <div className={classes.workDetails}>
              <Typography>
                ○ Assisted for design and architecture of framework for storing
                geography locations using C# and .NET
              </Typography>
              <Typography>
                ○ Created proof of concept visualization of geography data using
                Google Maps API and JavaScript
              </Typography>
              <Typography>
                ○ Worked in two-week sprints with React, JavaScript, C# and SQL
                to fix urgent platform defects and refactor outdated code
              </Typography>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} style={{ minHeight: "255px" }}>
            <Box display="flex" flexDirection="row" className={classes.box}>
              <img className={classes.logo} src={tdsb} />
              <div>
                <h3 className={classes.title}>Toronto District School Board</h3>
                <h5 className={classes.description}>
                  Robotics Mentor | July 2018
                </h5>
              </div>
            </Box>
            <div className={classes.workDetails}>
              <Typography>
                ○ Planned and supervised team building activities to build
                leadership and teamwork among the campers.
              </Typography>
              <Typography>
                ○ Lead group discussions with coworkers from various groups in
                order to prepare competitive and inclusive activities.
              </Typography>
            </div>
          </TabPanel>
        </div>
      </Fade>
    </div>
  );
}
