const bodyStyle = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
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
