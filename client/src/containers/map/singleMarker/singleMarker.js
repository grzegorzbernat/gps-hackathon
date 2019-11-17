import React from "react";
import { Marker } from "react-leaflet";
import "proj4";
import GoodIcon from "./icons/goodIcon";
import BadIcon from "./icons/badIcon";
import { handleModal } from "../../../store/action";
import { connect } from "react-redux";

const SingleMarker = ({ waypoint, dispatchHandleModal }) => {
  const { position, rating, name, id } = waypoint;
  const customIcon = rating > 0 ? GoodIcon : BadIcon;

  return (
    <Marker
      position={position}
      icon={customIcon}
      onClick={() => dispatchHandleModal(true, waypoint)}
    ></Marker>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchHandleModal: (shouldBeOn, waypoint) =>
      dispatch(handleModal(shouldBeOn, waypoint))
  };
};

export default connect(null, mapDispatchToProps)(SingleMarker);
