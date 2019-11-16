import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.css";

class MapView extends Component {
  state = {
    lat: 50.866077,
    lng: 20.628569,
    zoom: 15
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        maxZoom={20}
        minZoom={13}
        animate={true}
        easeLinearity={0.35}
        attributionControl={true}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapView;
