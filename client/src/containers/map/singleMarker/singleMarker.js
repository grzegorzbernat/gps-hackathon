import React from "react";
import { Marker, Popup } from "react-leaflet";
import "proj4";
import GoodIcon from "./icons/goodIcon";
import BadIcon from "./icons/badIcon";

const SingleMarker = ({ waypoint }) => {
  const { position, rating, name, id } = waypoint;
  console.log(rating);
  const customIcon = rating > 0 ? GoodIcon : BadIcon;

  return (
    <Marker
      position={position}
      icon={customIcon}
      onClick={() => {
        console.log("test");
      }}
    ></Marker>
  );
};

export default SingleMarker;
