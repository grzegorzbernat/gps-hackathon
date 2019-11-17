import L from "leaflet";

const iconPerson = new L.Icon({
  iconUrl: require("../../../../images/green-iconfinder-icon.svg"),
  iconAnchor: new L.point(32, 64),
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(64, 64)
});

export default iconPerson;
