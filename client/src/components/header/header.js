import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccessibleForward from "@material-ui/icons/AccessibleForward";

import { connect } from "react-redux";
import Menu from "./menu/menu";

import { toggleMenu } from "../../store/action";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appIcon: {
    marginRight: "15px"
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    zIndex: 30
  }
}));

const Header = ({ toggleMenuHandle }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Menu />
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleMenuHandle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            <AccessibleForward className={classes.appIcon} />
            Przyjazne Kielce
          </Typography>
          <Button color="inherit">Polski</Button>
          <Button color="inherit">English</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenuHandle: () => dispatch(toggleMenu(true))
  };
};

export default connect(null, mapDispatchToProps)(Header);
