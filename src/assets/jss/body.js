const bodyStyle = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    backgroundColor: "#F8F8FF",
    // backgroundColor: "#172a45",
    // color: "#e6f1ff"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  paperz: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
});

export default bodyStyle;
