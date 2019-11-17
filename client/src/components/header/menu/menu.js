import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { toggleMenu } from "../../../store/action";
import { Link } from "react-router-dom";
import "./menu.css";

const MenuView = ({ isToggled, toggleMenuHandle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    toggleMenuHandle();
  };

  return (
    <div>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={isToggled}
        onClose={handleClose}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>Main</MenuItem>
        </Link>
        <Link to="/map">
          <MenuItem onClick={handleClose}>Map</MenuItem>
        </Link>
        <Link to="/ranking">
          <MenuItem onClick={handleClose}>Ranking</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

const mapStateToProps = ({ isMenuToggled }) => {
  return {
    isToggled: isMenuToggled
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenuHandle: () => dispatch(toggleMenu(false))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuView);
