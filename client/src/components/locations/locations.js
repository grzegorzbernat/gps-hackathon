import React from "react";
import "./locations.css";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { connect } from "react-redux";
import { saveLocation } from "../../store/action";

const Locations = ({ dispatchLocation }) => {
  return (
    <div className="locations">
      <div className="locations_container">
        <div
          className="flex-child"
          onClick={() => dispatchLocation("biblioteki")}
        >
          <label>
            <LibraryBooksIcon />
          </label>
          Biblioteka
        </div>
        <div
          className="flex-child"
          onClick={() => dispatchLocation("opieka_spoleczna")}
        >
          <label>
            <SupervisedUserCircleIcon />
          </label>
          Opieka Spoleczna
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLocation: loc => dispatch(saveLocation(loc))
  };
};

export default connect(null, mapDispatchToProps)(Locations);
