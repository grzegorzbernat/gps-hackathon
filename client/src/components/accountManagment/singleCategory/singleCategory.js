import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { saveCategory } from "../../../store/action";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,

    [theme.breakpoints.up("md")]: {
      height: "200px",
      paddingTop: "50px",
      background: "rgb(207, 227, 244)"
    }
  },
  clicked: {
    background: "#3f51b5",
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
    [theme.breakpoints.up("md")]: {
      height: "200px",
      paddingTop: "50px"
    }
  }
}));

const SingleCategory = ({
  children,
  name,
  redux_name,
  saveCategory,
  categories
}) => {
  const classes = useStyles();

  const [isClick, handleClick] = React.useState(false);
  const classOfTab = isClick ? classes.clicked : classes.paper;
  return (
    <Grid
      item
      xs={6}
      md={3}
      onClick={() => {
        const newVal = !categories[redux_name];
        saveCategory(redux_name, newVal);
        handleClick(!isClick);
      }}
    >
      <Paper className={classOfTab}>
        {children}
        <Typography component="h2" variant="subtitle2">
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveCategory: (name, val) => dispatch(saveCategory(name, val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategory);
