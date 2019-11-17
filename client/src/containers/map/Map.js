import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import { gatherLocations } from "../../api/api";
import "./map.css";
import { connect } from "react-redux";
import Marker from "./singleMarker/singleMarker";
import Locations from "../../components/locations/locations";

class MapView extends Component {
  state = {
    lat: 50.866077,
    lng: 20.628569,
    zoom: 15,
    locations: []
  };

  componentDidMount = () => {
    this.setState({ locations: [] });
    gatherLocations("wozek", this.props.locationsFilter).then(resp => {
      const markedCategories = this.props.categories;
      let index = null;

      for (var key in markedCategories) {
        if (markedCategories[key]) index = key;
      }

      const locationsArray = resp.map(singleResp => {
        return {
          id: singleResp._id,
          name: singleResp.properties.NAZWA,
          rating: singleResp[index],
          position: [
            singleResp.geometry.coordinates[1],
            singleResp.geometry.coordinates[0]
          ]
        };
      });

      this.setState({ locations: locationsArray });
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.locationsFilter !== this.props.locationsFilter) {
      gatherLocations("wozek", this.props.locationsFilter).then(resp => {
        const markedCategories = this.props.categories;
        let index = null;

        for (var key in markedCategories) {
          if (markedCategories[key]) index = key;
        }

        const locationsArray = resp.map(singleResp => {
          return {
            id: singleResp._id,
            name: singleResp.properties.NAZWA,
            rating: singleResp[index],
            position: [
              singleResp.geometry.coordinates[1],
              singleResp.geometry.coordinates[0]
            ]
          };
        });

        this.setState({ locations: locationsArray });
      });
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <>
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

          {this.state.locations.map(singleWaypoint => {
            return (
              <Marker
                waypoint={singleWaypoint}
                key={"marker-" + singleWaypoint.id}
              />
            );
          })}
        </Map>
        <Locations />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    locationsFilter: state.location
  };
};

export default connect(mapStateToProps)(MapView);
